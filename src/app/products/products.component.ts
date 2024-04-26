import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsList = [
    {
      name:'apple',
      id:'1'
    },
    {
      name:'samsung',
      id:'2'
    }, {
      name:'vivo',
      id:'3'
    }, {
      name:'MI',
      id:'4'
    },
  ]

  constructor(private router:Router){}

  showProductDetail(id:any) {
    //navigate to particular route
    this.router.navigate(['products', id])
  }
}
