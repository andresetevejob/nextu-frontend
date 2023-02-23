import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../entities/category';
import {Response} from "../response/response";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  findAll():Observable<HttpResponse<Category[]>>{
    return this.http.get<Category[]>(`http://localhost:3000/api/categories`,{ observe: 'response' })
  }
  add(category: Category):Observable<HttpResponse<Response>> {
    return this.http.post<Response>(`http://localhost:3000/api/categories`, category, { observe: 'response' })
  }

  getOne(id: string):Observable<HttpResponse<Category>> {
    return this.http.get<Category>(`http://localhost:3000/api/categorie/${id}`, { observe: 'response' })
  }
}
