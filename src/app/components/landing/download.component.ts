import { Component } from '@angular/core';
import { LucideAngularModule, Apple, Smartphone, ExternalLink, QrCode } from 'lucide-angular';

@Component({
  selector: 'app-landing-download',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="download" class="bg-surface-container-low py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-surface-container-lowest rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-sm"
             data-aos="fade-up">
          <div class="max-w-lg">
            <p class="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get the App</p>
            <h2 class="text-4xl font-extrabold tracking-tighter mb-4 font-display">Your student wallet,<br/>in your pocket.</h2>
            <p class="text-on-surface-variant leading-relaxed mb-8">
              Download SolexPay and manage your campus finances on the go. Available on iOS and Android.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#" class="flex items-center gap-3 bg-on-surface text-surface px-6 py-3.5 rounded-xl hover:bg-on-surface/90 hover:-translate-y-0.5 transition-all">
                <lucide-icon [img]="AppleIcon" class="w-8 h-8"></lucide-icon>
                <div>
                  <p class="text-[10px] opacity-60 leading-none mb-0.5">Download on the</p>
                  <p class="font-bold leading-none">App Store</p>
                </div>
              </a>
              <a href="#" class="flex items-center gap-3 bg-on-surface text-surface px-6 py-3.5 rounded-xl hover:bg-on-surface/90 hover:-translate-y-0.5 transition-all">
                <lucide-icon [img]="SmartphoneIcon" class="w-8 h-8"></lucide-icon>
                <div>
                  <p class="text-[10px] opacity-60 leading-none mb-0.5">Get it on</p>
                  <p class="font-bold leading-none">Google Play</p>
                </div>
              </a>
              <a href="#" class="flex items-center gap-3 bg-surface-container-high text-on-surface px-6 py-3.5 rounded-xl hover:bg-surface-container-highest transition-all border border-outline-variant">
                <lucide-icon [img]="ExternalLinkIcon" class="w-8 h-8"></lucide-icon>
                <div>
                  <p class="text-[10px] text-on-surface-variant leading-none mb-0.5">Use in browser</p>
                  <p class="font-bold leading-none">Web App</p>
                </div>
              </a>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4 shrink-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="w-44 h-44 bg-surface-container-high rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-dashed border-outline-variant">
              <lucide-icon [img]="QrCodeIcon" class="w-10 h-10 text-outline"></lucide-icon>
              <p class="text-xs text-on-surface-variant font-medium">Scan to download</p>
            </div>
            <p class="text-xs text-on-surface-variant">Works on iOS &amp; Android</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class LandingDownloadComponent {
  readonly AppleIcon = Apple;
  readonly SmartphoneIcon = Smartphone;
  readonly ExternalLinkIcon = ExternalLink;
  readonly QrCodeIcon = QrCode;
}
