import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { apiBaseUrl } from '../../../core/utilities/api.baseurl';
import { Observable } from 'rxjs';
import { IallCategories } from '../models/iall-categories';
import { CategoryEndPoints } from '../end_points/category.endpoints';
import { CategotyRepo } from '../repo/category.repo';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements CategotyRepo {
  private readonly _http: HttpClient = inject(HttpClient)
  constructor(@Inject(apiBaseUrl) private readonly _apiBaseUrl: string){}
  getAllCategories(): Observable<IallCategories>
  {
    return this._http.get<IallCategories>(this._apiBaseUrl + CategoryEndPoints.allCategories)
  }
}
