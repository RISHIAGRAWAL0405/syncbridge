import { Component, OnInit, inject, PLATFORM_ID, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CursorService } from '../../../core/services/cursor.service';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="cursor-dot" [style.left.px]="cursor.x()" [style.top.px]="cursor.y()"
         [class.hidden]="cursor.isHidden()" [class.hovering]="cursor.isHovering()"></div>
    <div class="cursor-ring" [style.left.px]="cursor.x()" [style.top.px]="cursor.y()"
         [class.hidden]="cursor.isHidden()" [class.hovering]="cursor.isHovering()">
      @if (cursor.label()) {
        <span class="cursor-label">{{ cursor.label() }}</span>
      }
    </div>
  `,
  styleUrl: './cursor.component.scss'
})
export class CursorComponent implements OnInit {
  cursor = inject(CursorService);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) this.cursor.init();
  }
}
