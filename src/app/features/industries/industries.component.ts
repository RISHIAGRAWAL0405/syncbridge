import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-industries', standalone: true,
  template: `<section class="tz-page-hero"><div class="container tz-page-hero-inner"><span class="tz-eyebrow">Industries</span><h1>Expertise that adapts to your market.</h1><p>We bring sector-specific insight to every engagement.</p></div></section><section class="container industry-list">@for (industry of data.industries; track industry.id) { <article><span>{{ industry.icon }}</span><h2>{{ industry.label }}</h2><p>{{ industry.description }}</p></article> }</section>`,
  styles: [`.industry-list{padding:5rem 0;display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.industry-list article{padding:1.5rem;border:1px solid var(--tz-border);border-radius:12px}.industry-list span{font-size:2rem}.industry-list h2{font-size:1.3rem;margin:.8rem 0}.industry-list p{color:var(--tz-text-muted)}@media(max-width:700px){.industry-list{grid-template-columns:1fr}}`]
})
export class IndustriesComponent { data = inject(DataService); }
