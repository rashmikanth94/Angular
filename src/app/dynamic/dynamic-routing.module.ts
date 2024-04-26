import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  {
    path:'',
    component:DynamicComponent,
    pathMatch:'full'
  },
  {
    path:'dynamic',
    pathMatch:'full',
    children:[
      {
        path:':id',
        component:BookDetailComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
