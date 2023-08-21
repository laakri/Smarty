import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css'],
})
export class QuizHeaderComponent {
  audioPlayer: HTMLAudioElement;
  isMuted: boolean = true;

  constructor() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = '../../../assets/Snor.mp3';
    this.audioPlayer.loop = true;
    this.audioPlayer.muted = this.isMuted;
  }
  ngOnInit() {
    this.audioPlayer.play();
  }
  updateVolume() {
    // Update the audio player's volume
    this.audioPlayer.volume = this.audioPlayer.volume;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audioPlayer.muted = this.isMuted;
  }
  ngOnDestroy() {
    this.audioPlayer.pause();
  }
}
