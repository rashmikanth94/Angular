import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  params:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //fetch the params from URL
    const params = this.route.snapshot.params;
    this.params = params
  }
}

