import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../entities/category";
import {Articles} from "../entities/articles";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  findAll():Observable<HttpResponse<Articles[]>>{
    return this.http.get<Articles[]>(`http://localhost:3000/api/articles`,{ observe: 'response' })
  }

}
