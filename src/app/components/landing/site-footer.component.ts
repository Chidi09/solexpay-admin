import { Component } from '@angular/core';
import { LucideAngularModule, Apple, Smartphone, Globe, MessageCircle, Share2 } from 'lucide-angular';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <footer class="bg-inverse-surface text-surface py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-2 md:col-span-1 space-y-5">
            <div class="flex items-center gap-3">
              <img src="/logo-icon-white.png" alt="Solexpay" class="h-10 w-10"/>
              <span class="text-2xl font-black tracking-tighter text-white font-display">Solexpay</span>
            </div>
            <p class="text-outline-variant text-sm leading-relaxed max-w-xs">Financial empowerment for the next generation of African leaders. Built for Nigerian students.</p>
            <div class="flex gap-3">
              <div class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer border border-white/10">
                <lucide-icon [img]="GlobeIcon" class="w-[18px] h-[18px]"></lucide-icon>
              </div>
              <div class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer border border-white/10">
                <lucide-icon [img]="ChatIcon" class="w-[18px] h-[18px]"></lucide-icon>
              </div>
              <div class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer border border-white/10">
                <lucide-icon [img]="ShareIcon" class="w-[18px] h-[18px]"></lucide-icon>
              </div>
            </div>
          </div>

          <div>
            <h5 class="text-white font-bold mb-5 font-display">Product</h5>
            <ul class="space-y-3 text-outline-variant text-sm">
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Smart Wallet</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Academic Loans</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Goal Savings</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Bill Payments</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">P2P Transfers</li>
            </ul>
          </div>

          <div>
            <h5 class="text-white font-bold mb-5 font-display">Company</h5>
            <ul class="space-y-3 text-outline-variant text-sm">
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">About Us</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Careers</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Contact</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Privacy Policy</li>
              <li class="hover:text-primary-fixed transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          <div>
            <h5 class="text-white font-bold mb-5 font-display">Download</h5>
            <div class="space-y-3">
              <a href="#" class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/10 cursor-pointer transition-colors">
                <lucide-icon [img]="AppleIcon" class="w-[22px] h-[22px]"></lucide-icon>
                <div>
                  <p class="text-[10px] text-outline-variant">Download on the</p>
                  <p class="text-sm font-bold text-white">App Store</p>
                </div>
              </a>
              <a href="#" class="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/10 cursor-pointer transition-colors">
                <lucide-icon [img]="SmartphoneIcon" class="w-[22px] h-[22px]"></lucide-icon>
                <div>
                  <p class="text-[10px] text-outline-variant">Get it on</p>
                  <p class="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-outline-variant text-xs">
          <p>© 2025 SolexPay Technologies Ltd. All rights reserved.</p>
          <div class="flex gap-6">
            <span class="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span class="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span class="hover:text-white cursor-pointer transition-colors">Help Center</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class SiteFooterComponent {
  readonly AppleIcon = Apple;
  readonly SmartphoneIcon = Smartphone;
  readonly GlobeIcon = Globe;
  readonly ChatIcon = MessageCircle;
  readonly ShareIcon = Share2;
}
