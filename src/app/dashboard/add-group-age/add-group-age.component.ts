import { Component } from '@angular/core';
import { AgeGroup } from '../../model/age-group.model';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-add-group-age',
  templateUrl: './add-group-age.component.html',
  styleUrls: ['./add-group-age.component.css'],
})
export class AddGroupAgeComponent {
  newAgeGroup: AgeGroup = { name: '', description: '' };

  constructor(private QuizService: QuizService) {}

  onSubmit() {
    this.QuizService.createAgeGroup(this.newAgeGroup).subscribe(
      (response) => {
        console.log('New age group created:', response);
        this.newAgeGroup = { name: '', description: '' };
      },
      (error) => {
        console.error('Error creating age group:', error);
      }
    );
  }
}
