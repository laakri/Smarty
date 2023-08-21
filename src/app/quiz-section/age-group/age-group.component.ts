import { Component } from '@angular/core';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.css'],
})
export class AgeGroupComponent {
  ageGroups: any[] = [];

  constructor(private QuizService: QuizService) {}

  ngOnInit(): void {
    this.fetchAgeGroups();
  }

  fetchAgeGroups(): void {
    this.QuizService.getAllAgeGroups().subscribe(
      (data: any[]) => {
        this.ageGroups = data;
      },
      (error) => {
        console.error('Error fetching age groups:', error);
      }
    );
  }
}
