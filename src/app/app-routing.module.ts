import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { ArticlesComponent } from "./pages/articles/articles.component";
import { AddCategoriesComponent } from "./pages/add-categories/add-categories.component";

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'products',component:ProductComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'add-categories',component:AddCategoriesComponent},
  {path:'edit-categories/:id',component:AddCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
