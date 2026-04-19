import { Component } from '@angular/core';
import { LucideAngularModule, GraduationCap, Apple, Smartphone, CheckCircle2, Zap, Bell, UtensilsCrossed, PiggyBank, Plus, Send, Receipt, Wallet } from 'lucide-angular';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [LucideAngularModule],
  styles: [`
    .editorial-gradient { background: linear-gradient(135deg, #005bbf 0%, #1a73e8 100%); }
    .glass-card { background: rgba(255,255,255,0.85); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
    .phone-glow { box-shadow: 0 50px 100px -20px rgba(0,91,191,0.35), 0 20px 40px -10px rgba(0,91,191,0.20); }
    .phone-back { box-shadow: 0 40px 80px -20px rgba(0,109,44,0.25), 0 12px 28px rgba(0,0,0,0.14); }
    /* iPhone 15 Pro – 146.6 x 70.85 mm → 9 : 19.5 */
    .phone-frame { background: linear-gradient(145deg, #1e293b 0%, #0f172a 60%, #020617 100%); aspect-ratio: 9 / 19.5; }
    .phone-frame-green { background: linear-gradient(145deg, #1f2937 0%, #111827 100%); aspect-ratio: 9 / 19.5; }
    .phone-screen { aspect-ratio: 9 / 19.5; }
    @keyframes float { 0%,100%{transform:translateY(0) rotate(3deg)} 50%{transform:translateY(-12px) rotate(3deg)} }
    @keyframes float-delayed { 0%,100%{transform:translateY(-6px) rotate(-6deg)} 50%{transform:translateY(6px) rotate(-6deg)} }
    .animate-float { animation: float 5s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 6s ease-in-out infinite; }
  `],
  template: `
    <section class="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
      <!-- Left copy -->
      <div class="space-y-8" data-aos="fade-right" data-aos-duration="700">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold tracking-widest uppercase">
          <lucide-icon [img]="GraduationCapIcon" class="w-3.5 h-3.5"></lucide-icon>
          Built for Nigerian Students
        </div>

        <h1 class="text-5xl md:text-[4.25rem] font-extrabold tracking-tighter leading-[1.05] text-on-surface font-display">
          The smarter<br/>wallet for<br/><span class="text-primary">campus life.</span>
        </h1>

        <p class="text-lg text-on-surface-variant max-w-md leading-relaxed">
          Manage allowances, pay school fees, and access instant student loans — all in one beautifully simple app.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#download" class="px-8 py-4 editorial-gradient text-on-primary font-bold rounded-xl shadow-xl shadow-primary/25 hover:brightness-110 hover:-translate-y-0.5 transition-all">
            Open Your Account
          </a>
          <a href="#features" class="px-8 py-4 bg-surface-container-high text-on-surface font-bold rounded-xl hover:bg-surface-container-highest transition-colors">
            See Features
          </a>
        </div>

        <div class="pt-2">
          <p class="text-xs text-on-surface-variant mb-3 font-medium uppercase tracking-wider">Available on</p>
          <div class="flex flex-wrap gap-3">
            <a href="#download" class="flex items-center gap-3 bg-on-surface text-surface px-5 py-3 rounded-xl hover:bg-on-surface/90 transition-all">
              <lucide-icon [img]="AppleIcon" class="w-7 h-7"></lucide-icon>
              <div class="text-left">
                <p class="text-[10px] opacity-70 leading-none mb-0.5">Download on the</p>
                <p class="text-sm font-bold leading-none">App Store</p>
              </div>
            </a>
            <a href="#download" class="flex items-center gap-3 bg-on-surface text-surface px-5 py-3 rounded-xl hover:bg-on-surface/90 transition-all">
              <lucide-icon [img]="SmartphoneIcon" class="w-7 h-7"></lucide-icon>
              <div class="text-left">
                <p class="text-[10px] opacity-70 leading-none mb-0.5">Get it on</p>
                <p class="text-sm font-bold leading-none">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Right phone mockups -->
      <div class="relative flex justify-center items-center min-h-[620px] md:min-h-[640px] lg:min-h-[620px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
        <div class="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Back phone -->
        <div class="absolute left-0 top-10 z-10 w-[210px] phone-frame-green rounded-[2.75rem] p-[6px] phone-back animate-float-delayed">
          <div class="bg-slate-950 rounded-[2.55rem] p-1 h-full">
            <div class="bg-surface rounded-[2.3rem] overflow-hidden h-full">
              <div class="h-6 bg-slate-950 flex items-center justify-center rounded-t-[2.3rem]">
                <div class="w-16 h-4 bg-black rounded-full"></div>
              </div>
              <div class="p-4 flex flex-col gap-3 h-[calc(100%-1.5rem)]">
                <div class="bg-tertiary-container p-4 rounded-2xl text-on-tertiary-container">
                  <p class="text-[10px] font-bold opacity-80 mb-1">Loan Approved</p>
                  <p class="text-2xl font-black font-display">₦250,000</p>
                  <p class="text-[9px] opacity-70 mt-1">Disbursed to your wallet</p>
                </div>
                <div class="flex-1 flex flex-col gap-2">
                  <div class="bg-surface-container-low p-3 rounded-xl flex justify-between items-center">
                    <span class="text-[10px] font-medium text-on-surface-variant">Next Payment</span>
                    <span class="text-[10px] font-bold text-on-surface">May 15</span>
                  </div>
                  <div class="bg-surface-container-low p-3 rounded-xl flex justify-between items-center">
                    <span class="text-[10px] font-medium text-on-surface-variant">Monthly</span>
                    <span class="text-[10px] font-bold text-tertiary">₦23,333</span>
                  </div>
                  <div class="bg-surface-container-low p-3 rounded-xl flex justify-between items-center">
                    <span class="text-[10px] font-medium text-on-surface-variant">Interest Rate</span>
                    <span class="text-[10px] font-bold text-on-surface">12% APR</span>
                  </div>
                  <div class="bg-surface-container-low p-3 rounded-xl flex justify-between items-center">
                    <span class="text-[10px] font-medium text-on-surface-variant">Tenor</span>
                    <span class="text-[10px] font-bold text-on-surface">12 months</span>
                  </div>
                  <div class="bg-surface-container-low p-3 rounded-xl flex justify-between items-center">
                    <span class="text-[10px] font-medium text-on-surface-variant">Remaining</span>
                    <span class="text-[10px] font-bold text-on-surface">₦210,000</span>
                  </div>
                </div>
                <div class="w-full py-2.5 bg-tertiary text-on-tertiary text-[11px] font-bold rounded-xl text-center">
                  View Schedule
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Front phone - iPhone 15 Pro-style frame -->
        <div class="relative z-20 ml-20 w-[260px] phone-frame rounded-[3.25rem] p-[7px] phone-glow animate-float">
          <!-- Side button accents -->
          <div class="absolute left-[-3px] top-24 w-[3px] h-12 bg-slate-700 rounded-l-sm"></div>
          <div class="absolute left-[-3px] top-40 w-[3px] h-20 bg-slate-700 rounded-l-sm"></div>
          <div class="absolute right-[-3px] top-36 w-[3px] h-16 bg-slate-700 rounded-r-sm"></div>

          <div class="bg-slate-950 rounded-[2.9rem] p-1 h-full">
            <div class="bg-surface rounded-[2.65rem] overflow-hidden relative h-full">
              <!-- Dynamic Island -->
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-full z-30"></div>

              <div class="p-5 pt-10 flex flex-col gap-4 h-full">
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <div class="w-9 h-9 rounded-full editorial-gradient flex items-center justify-center shadow-sm">
                      <img src="/logo-icon-white.png" alt="Solexpay" class="w-5 h-5" />
                    </div>
                    <div>
                      <p class="text-[10px] text-on-surface-variant">Good morning 👋</p>
                      <p class="text-xs font-bold text-on-surface">Chidi</p>
                    </div>
                  </div>
                  <div class="relative">
                    <lucide-icon [img]="BellIcon" class="w-5 h-5 text-outline"></lucide-icon>
                    <span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-error rounded-full"></span>
                  </div>
                </div>

                <div class="editorial-gradient p-5 rounded-2xl text-on-primary shadow-lg">
                  <p class="text-[10px] opacity-80 mb-1">Total Balance</p>
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm font-medium">₦</span>
                    <h2 class="text-3xl font-black font-display">45,200</h2>
                    <span class="text-sm font-medium">.00</span>
                  </div>
                  <p class="text-[9px] opacity-70 mt-1">**** 4521 · Verified</p>
                  <div class="mt-4 grid grid-cols-4 gap-1.5">
                    @for (action of quickActions; track action.label) {
                      <div class="bg-white/15 rounded-xl p-2 flex flex-col items-center gap-1">
                        <lucide-icon [img]="action.icon" class="w-3.5 h-3.5"></lucide-icon>
                        <p class="text-[8px] font-bold leading-none">{{ action.label }}</p>
                      </div>
                    }
                  </div>
                </div>

                <div>
                  <p class="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">Recent Activity</p>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center bg-surface-container-low p-2.5 rounded-xl">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-primary-fixed rounded-lg flex items-center justify-center">
                          <lucide-icon [img]="UtensilsIcon" class="w-3.5 h-3.5 text-primary"></lucide-icon>
                        </div>
                        <div>
                          <p class="text-[10px] font-bold">Cafeteria</p>
                          <p class="text-[9px] text-outline">Food &amp; Drinks</p>
                        </div>
                      </div>
                      <span class="text-[10px] font-bold text-error">-₦1,200</span>
                    </div>
                    <div class="flex justify-between items-center bg-surface-container-low p-2.5 rounded-xl">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-tertiary/10 rounded-lg flex items-center justify-center">
                          <lucide-icon [img]="PiggyBankIcon" class="w-3.5 h-3.5 text-tertiary"></lucide-icon>
                        </div>
                        <div>
                          <p class="text-[10px] font-bold">Savings Goal</p>
                          <p class="text-[9px] text-outline">Hostel Fund</p>
                        </div>
                      </div>
                      <span class="text-[10px] font-bold text-tertiary">+₦5,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating notifications -->
        <div class="absolute top-4 right-4 z-30 glass-card rounded-2xl px-4 py-3 shadow-lg border border-white/60 flex items-center gap-3 animate-float-delayed">
          <div class="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center">
            <lucide-icon [img]="CheckIcon" class="w-4 h-4 text-on-tertiary"></lucide-icon>
          </div>
          <div>
            <p class="text-[11px] font-bold text-on-surface">Loan Approved!</p>
            <p class="text-[9px] text-on-surface-variant">₦250,000 disbursed</p>
          </div>
        </div>

        <div class="absolute bottom-6 right-2 z-30 glass-card rounded-2xl px-4 py-3 shadow-lg border border-white/60 flex items-center gap-3 animate-float">
          <div class="w-8 h-8 editorial-gradient rounded-full flex items-center justify-center">
            <lucide-icon [img]="ZapIcon" class="w-4 h-4 text-on-primary"></lucide-icon>
          </div>
          <div>
            <p class="text-[11px] font-bold text-on-surface">Transfer sent</p>
            <p class="text-[9px] text-on-surface-variant">₦8,000 · Instant</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class LandingHeroComponent {
  readonly GraduationCapIcon = GraduationCap;
  readonly AppleIcon = Apple;
  readonly SmartphoneIcon = Smartphone;
  readonly CheckIcon = CheckCircle2;
  readonly ZapIcon = Zap;
  readonly BellIcon = Bell;
  readonly UtensilsIcon = UtensilsCrossed;
  readonly PiggyBankIcon = PiggyBank;

  readonly quickActions = [
    { icon: Plus, label: 'Fund' },
    { icon: Send, label: 'Send' },
    { icon: Receipt, label: 'Bills' },
    { icon: Wallet, label: 'Save' },
  ];
}
