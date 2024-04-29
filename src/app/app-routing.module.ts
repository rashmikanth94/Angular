import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ReativeFormsComponent } from './reative-forms/reative-forms.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent, canActivate:[AuthGuard]},
  {path:'products', component:ProductsComponent},
  {path:'products/:id', component:ProductDetailComponent},
  {path:'books', component:BooksComponent},
  {
    path:'books',
    children:[
      {
        path:':id',
        component:BookDetailComponent
      }
    ]
  },
  {path:'dynamic', loadChildren:()=>import('./dynamic/dynamic.module').then((module:any)=>module.DynamicModule)},
  {path:'forms', component:FormsComponent},
  {path:'reactiveForms', component:ReativeFormsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
