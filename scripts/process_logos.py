"""
SolexPay logo processing script.
Generates all icon/image assets needed for the web app from source logos.

Outputs (all go to public/):
  favicon.ico            — multi-size 16/32/48 favicon
  favicon-16x16.png
  favicon-32x32.png
  favicon-96x96.png
  apple-touch-icon.png   — 180x180 with brand bg (iOS home screen)
  logo-icon.png          — transparent icon only (navbar/UI use)
  logo-icon-white.png    — white-filled icon for dark backgrounds
  icons/icon-192x192.png — PWA manifest icon
  icons/icon-512x512.png — PWA manifest icon (maskable)
  og-image.png           — 1200x630 Open Graph / social card
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

DOWNLOADS = Path("C:/Users/IFEANYI PC/Downloads")
OUT = Path("C:/Users/IFEANYI PC/Solexpay-frontend/public")
OUT.mkdir(exist_ok=True)
(OUT / "icons").mkdir(exist_ok=True)

# Brand colours
PRIMARY   = (0, 91, 191)      # #005bbf
DARK_NAVY = (13, 27, 90)      # #0d1b5a  (wallet colour)
WHITE     = (255, 255, 255)

# ── helper ───────────────────────────────────────────────────────────────────

def remove_white_bg(path: Path, tolerance: int = 28) -> Image.Image:
    """
    Remove white/near-white background from a JPEG logo.
    Uses corner-sampling so solid-colour content is never wiped.
    Returns RGBA image with transparent background.
    """
    img = Image.open(path).convert("RGBA")
    data = np.array(img, dtype=np.int32)

    # Sample background colour from all four corners (average)
    h, w = data.shape[:2]
    corners = [data[0, 0, :3], data[0, w-1, :3],
               data[h-1, 0, :3], data[h-1, w-1, :3]]
    bg = np.mean(corners, axis=0)  # expected to be ~255,255,255 for white-bg images

    # Euclidean distance from background colour
    rgb = data[:, :, :3].astype(np.float32)
    dist = np.sqrt(((rgb - bg) ** 2).sum(axis=2))

    # Pixels within tolerance become transparent
    mask = dist < tolerance
    data[mask, 3] = 0

    # Soften jagged edges with a very slight blur on the alpha channel only
    result = Image.fromarray(data.astype(np.uint8), "RGBA")
    r, g, b, a = result.split()
    a = a.filter(ImageFilter.GaussianBlur(0.6))
    result = Image.merge("RGBA", (r, g, b, a))
    return result


def trim_alpha(img: Image.Image) -> Image.Image:
    """Crop transparent borders."""
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def pad_to_square(img: Image.Image, padding: float = 0.08) -> Image.Image:
    """Place image centred in a square canvas with proportional padding."""
    side = max(img.width, img.height)
    pad = int(side * padding)
    canvas_side = side + pad * 2
    canvas = Image.new("RGBA", (canvas_side, canvas_side), (0, 0, 0, 0))
    x = (canvas_side - img.width) // 2
    y = (canvas_side - img.height) // 2
    canvas.paste(img, (x, y), img)
    return canvas


def make_icon_white(icon_rgba: Image.Image) -> Image.Image:
    """Return a copy with all opaque pixels set to white (for dark bg use)."""
    data = np.array(icon_rgba.convert("RGBA"))
    opaque = data[:, :, 3] > 10
    data[opaque, 0] = 255
    data[opaque, 1] = 255
    data[opaque, 2] = 255
    return Image.fromarray(data)


def rounded_rect_bg(size: int, colour: tuple, radius_frac: float = 0.22) -> Image.Image:
    """Solid rounded-rectangle background."""
    bg = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(bg)
    r = int(size * radius_frac)
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=r,
                           fill=colour + (255,))
    return bg


# ── 1. Load source images ─────────────────────────────────────────────────────

print("Loading source images …")

# Icon only (already transparent from remove-bg service)
icon_src = Image.open(DOWNLOADS / "logo-removebg-preview.png").convert("RGBA")
icon_clean = trim_alpha(icon_src)
icon_square = pad_to_square(icon_clean, padding=0.06)   # add small breathing room

# Full logo (icon + wordmark) from white-bg JPEG
print("Removing white background from full logo …")
full_logo_raw = remove_white_bg(DOWNLOADS / "SOLEXPAY LOGO_page-0001.jpg", tolerance=30)
full_logo = trim_alpha(full_logo_raw)

# ── 2. logo-icon.png  (transparent, used in navbar / UI) ─────────────────────

print("Saving logo-icon.png …")
icon_square.save(OUT / "logo-icon.png", "PNG")

# ── 3. logo-icon-white.png  (for dark backgrounds) ───────────────────────────

print("Saving logo-icon-white.png …")
icon_white = make_icon_white(icon_square)
icon_white.save(OUT / "logo-icon-white.png", "PNG")

# ── 4. favicon-*.png + favicon.ico ───────────────────────────────────────────

print("Generating favicons …")

favicon_sizes = [16, 32, 48, 96]
favicon_images = []

for sz in favicon_sizes:
    resized = icon_square.resize((sz, sz), Image.LANCZOS)
    path = OUT / f"favicon-{sz}x{sz}.png"
    resized.save(path, "PNG")
    favicon_images.append(resized)
    print(f"  favicon-{sz}x{sz}.png")

# Multi-size ICO
favicon_images[0].save(
    OUT / "favicon.ico",
    format="ICO",
    sizes=[(s, s) for s in favicon_sizes],
    append_images=favicon_images[1:],
)
print("  favicon.ico (multi-size)")

# ── 5. apple-touch-icon.png  (180×180, icon on primary brand bg) ─────────────

print("Saving apple-touch-icon.png …")
ati_size = 180
ati_bg = rounded_rect_bg(ati_size, PRIMARY)
icon_180 = icon_square.resize((int(ati_size * 0.72), int(ati_size * 0.72)), Image.LANCZOS)
icon_white_180 = make_icon_white(icon_180)
x = (ati_size - icon_white_180.width) // 2
y = (ati_size - icon_white_180.height) // 2
ati_bg.paste(icon_white_180, (x, y), icon_white_180)
ati_bg.save(OUT / "apple-touch-icon.png", "PNG")

# ── 6. PWA manifest icons ─────────────────────────────────────────────────────

print("Saving PWA icons …")
for sz in [192, 512]:
    bg = rounded_rect_bg(sz, PRIMARY, radius_frac=0.20)
    icon_sz = icon_square.resize((int(sz * 0.70), int(sz * 0.70)), Image.LANCZOS)
    icon_w_sz = make_icon_white(icon_sz)
    x = (sz - icon_w_sz.width) // 2
    y = (sz - icon_w_sz.height) // 2
    bg.paste(icon_w_sz, (x, y), icon_w_sz)
    bg.save(OUT / "icons" / f"icon-{sz}x{sz}.png", "PNG")
    print(f"  icons/icon-{sz}x{sz}.png")

# ── 7. og-image.png  (1200×630 Open Graph / Twitter card) ────────────────────

print("Building og-image.png …")
OG_W, OG_H = 1200, 630

# Gradient background: primary blue → darker navy
og = Image.new("RGBA", (OG_W, OG_H), (0, 0, 0, 255))
draw = ImageDraw.Draw(og)
for y in range(OG_H):
    t = y / OG_H
    r = int(PRIMARY[0] * (1 - t) + DARK_NAVY[0] * t)
    g = int(PRIMARY[1] * (1 - t) + DARK_NAVY[1] * t)
    b = int(PRIMARY[2] * (1 - t) + DARK_NAVY[2] * t)
    draw.line([(0, y), (OG_W, y)], fill=(r, g, b, 255))

# Decorative circles
for cx, cy, cr, alpha in [(900, 150, 300, 18), (200, 500, 200, 12), (1100, 550, 180, 15)]:
    circle = Image.new("RGBA", (OG_W, OG_H), (0, 0, 0, 0))
    cd = ImageDraw.Draw(circle)
    cd.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], fill=(255, 255, 255, alpha))
    og = Image.alpha_composite(og, circle)

# Full logo (white-tinted) — left-centre
logo_og = full_logo.copy()
logo_white = make_icon_white(logo_og)
max_h = 200
if logo_white.height > max_h:
    ratio = max_h / logo_white.height
    logo_white = logo_white.resize(
        (int(logo_white.width * ratio), max_h), Image.LANCZOS
    )
lx = 120
ly = (OG_H - logo_white.height) // 2
og.paste(logo_white, (lx, ly), logo_white)

# Icon (right side, large, faint watermark)
icon_og = make_icon_white(icon_square.resize((400, 400), Image.LANCZOS))
icon_og_data = np.array(icon_og)
icon_og_data[:, :, 3] = (icon_og_data[:, :, 3] * 0.12).astype(np.uint8)
icon_og_faint = Image.fromarray(icon_og_data)
og.paste(icon_og_faint, (780, 115), icon_og_faint)

og = og.convert("RGB")
og.save(OUT / "og-image.png", "PNG", optimize=True)
print("  og-image.png  (1200×630)")

# ── Done ──────────────────────────────────────────────────────────────────────
print("\n✓ All assets saved to public/")
for f in sorted(OUT.rglob("*")):
    if f.is_file():
        size_kb = f.stat().st_size / 1024
        print(f"  {f.relative_to(OUT)}  ({size_kb:.1f} kB)")
