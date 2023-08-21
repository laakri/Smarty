import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';
import { QuizHeaderComponent } from './quiz-section/quiz-header/quiz-header.component';
import { QuizContentComponent } from './quiz-section/quiz-content/quiz-content.component';
import { QuizIntroDialogComponent } from './quiz-section/quiz-intro-dialog/quiz-intro-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { AgeGroupComponent } from './quiz-section/age-group/age-group.component';
import { CategoryGroupComponent } from './quiz-section/category-group/category-group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGroupAgeComponent } from './dashboard/add-group-age/add-group-age.component';
import { AddGroupCategoryComponent } from './dashboard/add-group-category/add-group-category.component';
import { AddGroupQuestionComponent } from './dashboard/add-group-question/add-group-question.component';

/* *******************MODELS******************** */

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { A11yModule } from '@angular/cdk/a11y';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

/* ********************************************* */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    QuizSectionComponent,
    QuizHeaderComponent,
    QuizContentComponent,
    QuizIntroDialogComponent,
    FooterComponent,
    AgeGroupComponent,
    CategoryGroupComponent,
    DashboardComponent,
    AddGroupAgeComponent,
    AddGroupCategoryComponent,
    AddGroupQuestionComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSidenavModule,
    A11yModule,
    MatSortModule,
    MatSnackBarModule,
    MatListModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatChipsModule,
    /* SlickCarouselModule,*/
    ClipboardModule,
    MatTooltipModule,
    MatStepperModule,
    MatSelectModule,
    RouterModule.forRoot([]),
    MatSliderModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatProgressBarModule,
    SlickCarouselModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
