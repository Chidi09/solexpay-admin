import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';
import { TopBarComponent } from './topbar.component';
import { ToastOutletComponent } from './toast-outlet.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, TopBarComponent, ToastOutletComponent],
  template: `
    <div class="flex h-screen bg-surface overflow-hidden">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar>

      <!-- Main content area -->
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <app-topbar></app-topbar>
        
        <!-- Page content -->
        <main class="flex-1 overflow-y-auto p-6">
          <router-outlet></router-outlet>
        </main>
      </div>

      <!-- Toast notifications -->
      <app-toast-outlet></app-toast-outlet>
    </div>
  `
})
export class AdminLayoutComponent implements OnInit {
  private title = inject(Title);
  ngOnInit() { this.title.setTitle('Solexpay Admin Portal'); }
}
