import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-showreel',
  standalone: true,
  templateUrl: './showreel.component.html',
  styleUrl: './showreel.component.scss'
})
export class ShowreelComponent {
  @ViewChild('showreelVideo') showreelVideo?: ElementRef<HTMLVideoElement>;
  isPlaying = signal(true);

  toggleVideo() {
    const video = this.showreelVideo?.nativeElement;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => this.isPlaying.set(true)).catch(() => this.isPlaying.set(false));
    } else {
      video.pause();
      this.isPlaying.set(false);
    }
  }
}
