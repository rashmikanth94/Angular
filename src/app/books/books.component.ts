import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  productsList = [
    {
      name:'book1',
      id:'1'
    },
    {
      name:'book2',
      id:'2'
    }, {
      name:'book3',
      id:'3'
    }, {
      name:'book4',
      id:'4'
    },
  ]


  constructor(private router: Router, private route:ActivatedRoute) {}
  showProductDetail(id:any) {
    //navigate to particular route
    this.router.navigate(['./', id], {relativeTo:this.route, queryParams:{sort:false}})
  }
}
