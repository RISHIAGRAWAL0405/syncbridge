import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  steps = [
    { num: '01', title: 'Consultation', desc: 'We begin with an in-depth conversation to understand your vision, style preferences, and the story you want to tell.' },
    { num: '02', title: 'Planning', desc: 'Together we craft a detailed creative brief, scout locations, plan lighting, and prepare every element for perfection.' },
    { num: '03', title: 'Photoshoot', desc: 'On the day, our team creates a relaxed, inspiring atmosphere where authentic moments unfold naturally.' },
    { num: '04', title: 'Editing', desc: 'Each image is meticulously retouched with our signature cinematic style, ensuring every frame is gallery-worthy.' },
    { num: '05', title: 'Delivery', desc: 'Your curated collection is delivered through a private online gallery with full print rights and archival quality files.' },
  ];
}
