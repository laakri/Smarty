import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgeGroup } from '../model/age-group.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  /********************* AGE GROUP ************************* */
  createAgeGroup(ageGroup: AgeGroup): Observable<AgeGroup> {
    return this.http.post<AgeGroup>(
      `http://localhost:4401/api/group/NewAgeGroup`,
      ageGroup
    );
  }
  getAllAgeGroups(): Observable<any> {
    return this.http.get(`http://localhost:4401/api/group/GetAgeGroups`);
  }

  /********************* CATEGORY ************************* */
  createCategory(
    name: string,
    description: string,
    ageGroupId: string
  ): Observable<Category> {
    const newCategory = { name, description, ageGroupId };
    return this.http.post<Category>(
      `http://localhost:4401/api/category/NewCategory`,
      newCategory
    );
  }
  getCategoriesByAgeGroupId(ageGroupId: string): Observable<any> {
    const url = `http://localhost:4401/api/category/categories/${ageGroupId}`;
    return this.http.get(url);
  }

  /********************* QUESTION ************************* */
  createNewQuestion(questionData: any): Observable<any> {
    return this.http.post(
      'http://localhost:4401/api/question/NewQuestion',
      questionData
    );
  }
  getQuestionsByCategory(categoryId: string): Observable<any[]> {
    const url = `http://localhost:4401/api/question/questions/${categoryId}`;
    return this.http.get<any[]>(url);
  }
}
