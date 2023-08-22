import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../service/quiz.service'; // Update with the correct path
import { QuizCompletionDialogComponent } from '../quiz-completion-dialog/quiz-completion-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-content',
  templateUrl: './quiz-content.component.html',
  styleUrls: ['./quiz-content.component.css'],
})
export class QuizContentComponent implements OnInit {
  showGameIntro: boolean = true;
  options: string[] = [];
  selectedAnswer: string = '';
  questionIndex: number = 1;
  currentQuestion!: string;
  categoryId: string | null = null;
  questionNumber!: string;
  questions: any[] = [];
  totalQuestions!: number;
  progressNum: number = 0;
  correctAnswers: number = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
      if (this.categoryId) {
        this.loadQuestions();
      } else {
        console.error('Category ID not found in route params.');
      }
    });
  }

  calculateRocketPosition(): number {
    this.progressNum = (this.questionIndex / this.totalQuestions) * 100;
    return this.progressNum;
  }

  loadQuestions() {
    if (!this.categoryId) {
      return;
    }
    const localStorageKey = `${this.categoryId}`;
    const correctAnswersKey = `${this.categoryId}_correctAnswers`;
    const savedProgress = localStorage.getItem(localStorageKey);
    const correctAnswersString = localStorage.getItem(correctAnswersKey);

    this.quizService.getQuestionsByCategory(this.categoryId).subscribe(
      (questions) => {
        if (questions.length > 0) {
          this.questions = questions; // Update the questions array
          this.questionIndex = 0; // Reset question index
          this.correctAnswers = 0; // Reset question index
          this.totalQuestions = this.questions.length;
          localStorage.setItem(
            `${this.categoryId}_totalQuestions`,
            this.totalQuestions.toString()
          );

          if (savedProgress && correctAnswersString) {
            if (parseInt(savedProgress) !== this.totalQuestions) {
              this.questionIndex = parseInt(savedProgress, 10);
              this.correctAnswers = parseInt(correctAnswersString, 10);
            }
          }

          this.updateCurrentQuestion(this.questions[this.questionIndex]);
        }
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }

  updateCurrentQuestion(question: any) {
    this.currentQuestion = question.text;
    this.options = question.options[0].split('-'); // Updated variable name
    this.questionNumber = `Question ${this.questionIndex + 1}`; // Update question number
  }

  nextQuestion() {
    // Check if selected answer is correct
    const currentQuestion = this.questions[this.questionIndex];
    const correctOptionIndex = currentQuestion.correctOption - 1;
    localStorage.setItem(
      `${this.categoryId}`,
      (this.questionIndex + 1).toString()
    );

    if (this.selectedAnswer === this.options[correctOptionIndex]) {
      // Answer is correct
      this.correctAnswers++;
      localStorage.setItem(
        `${this.categoryId}_correctAnswers`,
        this.correctAnswers.toString()
      );
      this.applyBackgroundColor('success');
      setTimeout(() => {
        this.removeBackgroundColorClasses();
        this.moveToNextQuestion(); // Move to the next question
      }, 2000); // Adjust the delay time as needed
    } else {
      // Answer is incorrect
      this.applyBackgroundColor('fail');
      setTimeout(() => {
        this.showCorrectAnswer(correctOptionIndex);
        setTimeout(() => {
          this.removeBackgroundColorClasses();
          this.moveToNextQuestion(); // Move to the next question
        }, 1000); // Wait for 1 second before proceeding to the next question
      }, 1000); // Wait for 1 second before showing the correct answer
    }
  }

  moveToNextQuestion() {
    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++;
      this.updateCurrentQuestion(this.questions[this.questionIndex]);
      this.selectedAnswer = ''; // Reset selected answer for the next question
    } else {
      // All questions answered, open completion dialog
      const dialogRef = this.dialog.open(QuizCompletionDialogComponent, {
        disableClose: true,
        width: '500px',
        height: '300px',
      });

      dialogRef.componentInstance.dialogRef;
    }
  }

  selectAnswer(letter: string) {
    this.selectedAnswer = letter;
  }

  startGame() {
    this.showGameIntro = true;
  }

  applyBackgroundColor(result: 'success' | 'fail') {
    const gameOverlay = document.querySelector('.game-content');
    if (gameOverlay) {
      gameOverlay.classList.add(result);
    }
  }
  showCorrectAnswer(correctOptionIndex: number) {
    const correctOptionButton = document.querySelector(
      `.option-button:nth-child(${correctOptionIndex + 1})`
    ) as HTMLElement;
    if (correctOptionButton) {
      correctOptionButton.style.backgroundColor = '#4caf50'; // Change background color to show correct answer
    }
  }

  removeBackgroundColorClasses() {
    const gameOverlay = document.querySelector('.game-content');
    if (gameOverlay) {
      gameOverlay.classList.remove('success', 'fail');
    }
  }
}
