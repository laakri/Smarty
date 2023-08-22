import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-completion-dialog',
  templateUrl: './quiz-completion-dialog.component.html',
})
export class QuizCompletionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<QuizCompletionDialogComponent>,
    private router: Router
  ) {}

  closeDialogAndNavigateToCategoryPage(): void {
    const selectedAgeGroupId = localStorage.getItem('selectedAgeGroupId');

    if (selectedAgeGroupId) {
      // Remove the selected age group ID from local storage

      // Close the dialog
      this.dialogRef.close();

      // Navigate to the category page with the stored age group ID
      this.router.navigate(['/Quiz/category', selectedAgeGroupId]);
    }
  }
}
