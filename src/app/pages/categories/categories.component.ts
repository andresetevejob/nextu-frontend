import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories:Category[]=[];
  constructor(private categoriesService:CategoriesService){}
  ngOnInit(): void {
   this.categoriesService.findAll().subscribe((res: HttpResponse<Category[]>|any) => {
    this.categories = res.body;
  })
  }

}
