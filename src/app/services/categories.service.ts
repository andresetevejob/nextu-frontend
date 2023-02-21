import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../entities/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  findAll():Observable<HttpResponse<Category[]>>{
    return this.http.get<Category[]>(`http://localhost:3000/api/categories`,{ observe: 'response' })
  }
}
