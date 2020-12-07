import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  list:Product[];

  constructor() {
    this.list=[
      {"pId":1,"pName" :'Keyboard',"price": 500,"stock":12,"availability":true},
      {"pId":2,"pName" :'Mouse',"price":400,"stock":50,"availability":false},
      {"pId":3,"pName" :'Computer',"price":15000,"stock":7,"availability":true},
      {"pId":4,"pName" :'Printer',"price":5000,"stock":35,"availability":false},
      {"pId":5,"pName" :'Scanner',"price":6000,"stock":5,"availability":true},
    ]
   }

  ngOnInit() {
  }

}