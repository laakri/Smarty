import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-content',
  templateUrl: './quiz-content.component.html',
  styleUrls: ['./quiz-content.component.css'],
})
export class QuizContentComponent {
  showGameIntro: boolean = true;
  progressValue: number = 50;
  letters: string[] = ['A', 'O', 'R', 'E'];
  selectedAnswer: string = '';
  questionNumber: string = 'Question  1';
  currentQuestion: string = 'Find the Missing Letter';
  audioPlayer: HTMLAudioElement;
  isMuted: boolean = true;

  // *****************************

  constructor() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = '../../../assets/Snor.mp3';
    this.audioPlayer.loop = true;
    this.audioPlayer.muted = this.isMuted;
  }

  updateVolume() {
    // Update the audio player's volume
    this.audioPlayer.volume = this.audioPlayer.volume;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audioPlayer.muted = this.isMuted;
  }
  ngOnInit() {
    // Start playing the audio
    this.audioPlayer.play();
  }

  ngOnDestroy() {
    // Stop the audio and release resources
    this.audioPlayer.pause();
  }

  selectAnswer(letter: string) {
    this.selectedAnswer = letter;
  }
  calculateRocketPosition(): number {
    return this.progressValue;
  }
  startGame() {
    this.showGameIntro = true;
  }
}
