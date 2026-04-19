import { Directive, ElementRef, Input, SimpleChanges, inject } from '@angular/core';

@Directive({ selector: '[countUp]', standalone: true })
export class CountUpDirective {
  @Input() countUp = 0;
  @Input() duration = 1200;
  @Input() prefix = '';
  @Input() suffix = '';

  private el = inject(ElementRef);
  private hasAnimated = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['countUp'] && !this.hasAnimated) {
      this.hasAnimated = true;
      this.animate();
    }
  }

  private animate() {
    const start = performance.now();
    const target = this.countUp;
    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const value = Math.floor(eased * target);
      this.el.nativeElement.textContent = this.prefix + value.toLocaleString('en-NG') + this.suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }
}
