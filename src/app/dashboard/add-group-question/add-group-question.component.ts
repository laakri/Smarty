import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-add-group-question',
  templateUrl: './add-group-question.component.html',
  styleUrls: ['./add-group-question.component.css'],
})
export class AddGroupQuestionComponent {
  question = {
    categoryId: '',
    text: '',
    options: '',
    correctOption: '',
  };

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formIsValid()) {
      this.quizService.createNewQuestion(this.question).subscribe(
        (response) => {
          console.log('Question created:', response);
        },
        (error) => {
          console.error('Error creating question:', error);
        }
      );
    }
  }

  formIsValid(): boolean {
    // Implement your validation logic here
    return (
      this.question.categoryId !== '' &&
      this.question.text !== '' &&
      this.question.options !== '' &&
      this.question.correctOption !== ''
    );
  }
}
