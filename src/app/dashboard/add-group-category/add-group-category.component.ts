import { Component } from '@angular/core';
import { QuizService } from '../../service/quiz.service';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-add-group-category',
  templateUrl: './add-group-category.component.html',
  styleUrls: ['./add-group-category.component.css'],
})
export class AddGroupCategoryComponent {
  newCategory: Category = { name: '', description: '' };
  ageGroupId: string = '';

  constructor(private QuizService: QuizService) {}

  onSubmit() {
    this.QuizService.createCategory(
      this.newCategory.name,
      this.newCategory.description,
      this.ageGroupId
    ).subscribe(
      (response) => {
        console.log('New category created:', response);
        // Reset form fields
        this.newCategory = { name: '', description: '' };
        this.ageGroupId = '';
      },
      (error) => {
        console.error('Error creating category:', error);
      }
    );
  }
}
