import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule, CountUpDirective],
  template: `
    <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 transition-all duration-200 ease-out cursor-default"
         [class]="borderColorClass"
         [class.shadow]="true"
         style="box-shadow: 0 2px 12px rgba(25,28,29,0.06)"
         [style.hover:box-shadow]="'0 8px 32px rgba(0,91,191,0.12)'"
         [class.hover:-translate-y-0.5]="true">
      <p class="text-on-surface-variant text-sm font-medium mb-2">{{ label }}</p>
      <div class="flex items-baseline gap-1">
        @if (prefix) {
          <span class="text-xl font-medium opacity-50">{{ prefix }}</span>
        }
        <h2 class="text-3xl font-black text-on-surface" [countUp]="value" [prefix]="prefix" [duration]="1200">
          {{ value | number:'1.0-0':'en-NG' }}
        </h2>
        @if (suffix) {
          <span class="text-sm font-medium text-on-surface-variant">{{ suffix }}</span>
        }
      </div>
      @if (trend !== undefined) {
        <div class="flex items-center gap-1 mt-2">
          <span class="material-symbols-outlined text-sm"
                [class]="trend >= 0 ? 'text-tertiary' : 'text-error'">
            {{ trend >= 0 ? 'trending_up' : 'trending_down' }}
          </span>
          <span class="text-xs font-semibold"
                [class]="trend >= 0 ? 'text-tertiary' : 'text-error'">
            {{ trend >= 0 ? '+' : '' }}{{ trend }}%
          </span>
          <span class="text-xs text-on-surface-variant">vs last month</span>
        </div>
      }
    </div>
  `
})
export class MetricCardComponent {
  @Input() label!: string;
  @Input() value!: number;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() trend?: number;
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'error' = 'primary';

  get borderColorClass(): string {
    return {
      'primary': 'border-primary',
      'secondary': 'border-secondary',
      'tertiary': 'border-tertiary',
      'error': 'border-error'
    }[this.color];
  }
}
