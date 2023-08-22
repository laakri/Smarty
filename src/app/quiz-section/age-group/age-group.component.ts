import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.css'],
})
export class AgeGroupComponent {
  ageGroups: any[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAgeGroups();
  }

  fetchAgeGroups(): void {
    this.quizService.getAllAgeGroups().subscribe(
      (data: any[]) => {
        this.ageGroups = data;
      },
      (error) => {
        console.error('Error fetching age groups:', error);
      }
    );
  }

  startAdventure(ageGroupId: string): void {
    localStorage.setItem('selectedAgeGroupId', ageGroupId);

    this.router.navigate(['/Quiz/category', ageGroupId]);
  }
}
