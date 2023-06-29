import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';

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
      { path: '', redirectTo: '/Quiz/v', pathMatch: 'full' },
      { path: 'v', component: QuizSectionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
