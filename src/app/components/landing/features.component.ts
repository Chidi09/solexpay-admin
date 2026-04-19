import { Component } from '@angular/core';
import { LucideAngularModule, Send, Landmark, PiggyBank, Receipt } from 'lucide-angular';

@Component({
  selector: 'app-landing-features',
  standalone: true,
  imports: [LucideAngularModule],
  styles: [`.editorial-gradient { background: linear-gradient(135deg, #005bbf 0%, #1a73e8 100%); }`],
  template: `
    <section id="features" class="bg-surface-container-low py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16 flex items-start gap-4" data-aos="fade-up">
          <img src="/logo-icon.png" alt="Solexpay" class="w-12 h-12 mt-1 hidden md:block" />
          <div>
            <p class="text-primary font-bold tracking-widest uppercase text-sm mb-3">Everything You Need</p>
            <h2 class="text-4xl font-extrabold tracking-tighter font-display">Financial tools built for<br/>campus life.</h2>
            <div class="w-14 h-1.5 editorial-gradient rounded-full mt-4"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (feature of features; track feature.title; let i = $index) {
            <div class="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-transparent hover:border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all group"
                 data-aos="fade-up" [attr.data-aos-delay]="i * 100">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                   [class]="feature.iconBg">
                <lucide-icon [img]="feature.icon" class="w-7 h-7" [class]="feature.iconColor"></lucide-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 text-on-surface font-display">{{ feature.title }}</h3>
              <p class="text-on-surface-variant leading-relaxed">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class LandingFeaturesComponent {
  readonly features = [
    { icon: Send, iconBg: 'bg-primary/10', iconColor: 'text-primary',
      title: 'Instant Transfers',
      description: 'Send money to any Nigerian bank in seconds. No hidden fees, no pending anxiety. Just smooth transactions between friends and family.' },
    { icon: Landmark, iconBg: 'bg-tertiary/10', iconColor: 'text-tertiary',
      title: 'Student Loans',
      description: 'Access micro-loans for school fees, textbooks, or laptops with flexible repayment plans designed around your allowance schedule.' },
    { icon: PiggyBank, iconBg: 'bg-secondary/10', iconColor: 'text-secondary',
      title: 'Smart Savings',
      description: 'Create savings goals for rent, graduation, or a new laptop. Earn competitive interest while you reach your targets faster.' },
    { icon: Receipt, iconBg: 'bg-error/10', iconColor: 'text-error',
      title: 'Bill Payments',
      description: 'Pay for JAMB, WAEC, or school portal fees directly in-app. Airtime and data at discounted student rates, 24/7.' },
  ];
}
