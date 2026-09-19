import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceStripComponent } from './components/service-strip/service-strip.component';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { ServicesGridComponent } from './components/services-grid/services-grid.component';
import { FeaturedServicesComponent } from './components/featured-services/featured-services.component';
import { WhyTrizoneComponent } from './components/why-trizone/why-trizone.component';
import { IndustriesPreviewComponent } from './components/industries-preview/industries-preview.component';
import { WorkPreviewComponent } from './components/work-preview/work-preview.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaBandComponent } from './components/cta-band/cta-band.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServiceStripComponent,
    AboutIntroComponent,
    ServicesGridComponent,
    FeaturedServicesComponent,
    WhyTrizoneComponent,
    IndustriesPreviewComponent,
    WorkPreviewComponent,
    StatsComponent,
    TestimonialsComponent,
    CtaBandComponent,
  ],
  template: `
    <app-hero />
    <app-service-strip />
    <app-about-intro />
    <app-services-grid />
    <app-featured-services />
    <app-why-trizone />
    <app-work-preview />
    <app-stats />
    <app-industries-preview />
    <app-testimonials />
    <app-cta-band />
  `
})
export class HomeComponent {}
