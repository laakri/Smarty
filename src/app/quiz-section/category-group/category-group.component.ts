import { Component } from '@angular/core';
import { QuizService } from '../../service/quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-group',
  templateUrl: './category-group.component.html',
  styleUrls: ['./category-group.component.css'],
})
export class CategoryGroupComponent {
  ageGroupId!: string;
  categories: any[] = []; // Adjust the type as per your data structure

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const ageGroupId = params.get('id');
      if (ageGroupId !== null) {
        this.ageGroupId = ageGroupId;
        console.log(this.ageGroupId);
        this.loadCategories();
      } else {
        console.error('Age group ID is missing.');
      }
    });
  }

  loadCategories(): void {
    this.quizService.getCategoriesByAgeGroupId(this.ageGroupId).subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
