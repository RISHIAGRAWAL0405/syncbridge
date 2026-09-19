import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-band', standalone: true, imports: [RouterLink],
  template: `<section class="cta"><div class="container"><div><span>Let's create something meaningful</span><h2>Ready to grow your brand?</h2></div><a routerLink="/contact" class="tz-btn-lime">Start a conversation</a></div></section>`,
  styles: [`.cta{padding:4rem 0;background:var(--tz-dark-green)}.cta .container{display:flex;align-items:center;justify-content:space-between;gap:2rem}.cta span{color:var(--tz-lime);font-weight:600}.cta h2{color:var(--tz-white);margin-top:.5rem}@media(max-width:700px){.cta .container{align-items:start;flex-direction:column}}`]
})
export class CtaBandComponent {}
