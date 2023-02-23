import {Component, OnInit} from '@angular/core';
import {Category} from "../../entities/category";
import {CategoriesService} from "../../services/categories.service";
import {HttpResponse} from "@angular/common/http";
import {Articles} from "../../entities/articles";
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles:Articles[]=[];
  constructor(private articlesService:ArticlesService){}
  ngOnInit(): void {
    this.articlesService.findAll().subscribe((res: HttpResponse<Category[]>|any) => {
      this.articles = res.body;
    })
  }
}
