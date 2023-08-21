import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';
import { CategoryGroupComponent } from './quiz-section/category-group/category-group.component';
import { AgeGroupComponent } from './quiz-section/age-group/age-group.component';
import { QuizContentComponent } from './quiz-section/quiz-content/quiz-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGroupAgeComponent } from './dashboard/add-group-age/add-group-age.component';
import { AddGroupCategoryComponent } from './dashboard/add-group-category/add-group-category.component';
import { AddGroupQuestionComponent } from './dashboard/add-group-question/add-group-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/Homepage/v', pathMatch: 'full' },

  {
    path: 'Homepage',
    component: HomepageComponent,
    children: [
      { path: '', redirectTo: '/Homepage/v', pathMatch: 'full' },
      { path: 'v', component: HomepageComponent },
    ],
  },

  {
    path: 'Quiz',
    component: QuizSectionComponent,

    children: [
      { path: '', redirectTo: '/Quiz/age', pathMatch: 'full' },
      { path: 'age', component: AgeGroupComponent },
      { path: 'category/:id', component: CategoryGroupComponent },
      { path: 'questions/:id', component: QuizContentComponent },
    ],
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,

    children: [
      { path: '', redirectTo: '/Dashboard/add-age', pathMatch: 'full' },
      { path: 'add-age', component: AddGroupAgeComponent },
      { path: 'add-category', component: AddGroupCategoryComponent },
      { path: 'add-questions', component: AddGroupQuestionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
