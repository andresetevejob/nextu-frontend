import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  id!: string;

  constructor(private categoriesService: CategoriesService, private router: ActivatedRoute) {
    this.categoryForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  add() {
    const category = {
      title: this.categoryForm.value.title,
      description: this.categoryForm.value.description
    }
    this.categoriesService.add(category).subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id)
      if (this.id) {
        this.categoriesService.getOne(this.id).subscribe((res: any) => {
          this.categoryForm.setValue({
            title: res.body.title,
            description: res.body.description
          })
        })
      }
    })

  }

}
