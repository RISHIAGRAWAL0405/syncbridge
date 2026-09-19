import { Component, inject } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `<section class="stats"><div class="container"><div class="stats-grid">@for (stat of data.stats; track stat.label) { <div><strong>{{ stat.num }}{{ stat.suffix }}</strong><span>{{ stat.label }}</span></div> }</div></div></section>`,
  styles: [`.stats{background:var(--tz-dark-green);padding:3.5rem 0;color:var(--tz-white)}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}.stats strong{display:block;color:var(--tz-lime);font-size:clamp(2rem,5vw,3.5rem)}.stats span{color:rgba(255,255,255,.7)}@media(max-width:700px){.stats-grid{grid-template-columns:repeat(2,1fr)}}`]
})
export class StatsComponent { data = inject(DataService); }
