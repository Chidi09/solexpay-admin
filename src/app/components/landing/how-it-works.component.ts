import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-how-it-works',
  standalone: true,
  template: `
    <section id="how-it-works" class="max-w-7xl mx-auto px-6 py-24">
      <div class="text-center mb-20" data-aos="fade-up">
        <p class="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Process</p>
        <h2 class="text-4xl font-extrabold tracking-tighter font-display">Get started in 3 minutes</h2>
      </div>

      <div class="relative grid md:grid-cols-3 gap-12 text-center">
        <div class="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-surface-container-highest z-0"></div>
        @for (step of steps; track step.number; let i = $index) {
          <div class="relative z-10 flex flex-col items-center"
               data-aos="zoom-in" [attr.data-aos-delay]="i * 150">
            <div class="w-24 h-24 bg-surface-container-lowest shadow-lg rounded-full flex items-center justify-center mb-8 border-4 border-surface">
              <span class="text-3xl font-black text-primary font-display">{{ step.number }}</span>
            </div>
            <h4 class="text-xl font-bold mb-3 text-on-surface font-display">{{ step.title }}</h4>
            <p class="text-on-surface-variant text-sm px-4 leading-relaxed">{{ step.description }}</p>
          </div>
        }
      </div>
    </section>
  `
})
export class LandingHowItWorksComponent {
  readonly steps = [
    { number: '01', title: 'Download App', description: 'Available on iOS and Android. Register with your phone number in under 2 minutes.' },
    { number: '02', title: 'Verify Identity', description: 'Submit your BVN or NIN for quick KYC verification and unlock all features.' },
    { number: '03', title: 'Go Live', description: 'Fund your wallet and start managing your campus financial life.' },
  ];
}
