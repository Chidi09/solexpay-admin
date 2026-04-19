import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RippleDirective],
  template: `
    <header class="h-16 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10 px-6 flex items-center justify-between sticky top-0 z-30">
      <!-- Search -->
      <div class="relative transition-all duration-300 ease-out"
           [class]="searchFocused() ? 'w-96' : 'w-64'">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
              [class]="searchFocused() ? 'text-primary' : 'text-outline'">search</span>
        <input class="w-full bg-surface-container-low rounded-xl py-2.5 pl-10 pr-4
                      transition-all duration-200 text-sm font-medium outline-none
                      focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20"
               (focus)="searchFocused.set(true)"
               (blur)="searchFocused.set(false)"
               placeholder="Search system records..."
               type="text"/>
      </div>

      <!-- Right side actions -->
      <div class="flex items-center gap-2">
        <!-- Notifications -->
        <button class="relative p-2 rounded-full hover:bg-surface-container-high transition-colors duration-200"
                (click)="showNotifications()">
          <span class="material-symbols-outlined text-on-surface-variant">notifications</span>
          @if (unreadCount() > 0) {
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full animate-notification-dot ring-2 ring-surface-container-lowest"></span>
          }
        </button>

        <!-- Settings -->
        <button class="p-2 rounded-full hover:bg-surface-container-high transition-colors duration-200"
                (click)="goToSettings()">
          <span class="material-symbols-outlined text-on-surface-variant">settings</span>
        </button>

        <!-- Logout -->
        <button solexRipple 
                class="ml-2 px-4 py-2 bg-primary text-on-primary rounded-xl font-bold text-sm transition-all hover:brightness-110 active:scale-95"
                (click)="logout()">
          Logout
        </button>
      </div>
    </header>
  `
})
export class TopBarComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  searchFocused = signal(false);
  unreadCount = signal(3); // Mock data - would come from notifications service

  showNotifications() {
    // Would open notification drawer
    this.router.navigate(['/settings/notifications']);
  }

  goToSettings() {
    this.router.navigate(['/settings/profile']);
  }

  logout() {
    this.auth.logout();
  }
}
