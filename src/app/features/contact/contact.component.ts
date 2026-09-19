import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = signal(false);
  form = { name: '', email: '', service: '', message: '' };

  services = ['Wedding Photography', 'Portrait Session', 'Fashion Editorial', 'Commercial Photography', 'Travel Photography', 'Drone Aerial', 'Other'];

  onSubmit() {
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 4000);
    this.form = { name: '', email: '', service: '', message: '' };
  }
}
