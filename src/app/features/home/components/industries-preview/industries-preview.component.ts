import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-industries-preview', standalone: true, imports: [RouterLink],
  template: `<section class="industries container"><span class="tz-eyebrow tz-eyebrow-dark">Industries</span><h2 class="tz-section-title">Experience across sectors.</h2><div class="industry-grid">@for (industry of data.industries.slice(0, 6); track industry.id) { <a routerLink="/industries"><span>{{ industry.icon }}</span><strong>{{ industry.label }}</strong><small>{{ industry.description }}</small></a> }</div></section>`,
  styles: [`.industries{padding:6rem 0}.industries h2{margin:.8rem 0 2rem}.industry-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.industry-grid a{padding:1.5rem;border:1px solid var(--tz-border);border-radius:10px;display:grid;gap:.5rem}.industry-grid a>span{font-size:1.5rem}.industry-grid small{color:var(--tz-text-muted)}@media(max-width:700px){.industry-grid{grid-template-columns:1fr}}`]
})
export class IndustriesPreviewComponent { data = inject(DataService); }
