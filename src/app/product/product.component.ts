import { Component } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent {

  listProduct : Product [] = [];
  ngOnInit(){
    this.listProduct = [
      { id : 1, title : "pull 1", price : 18, quantity : 0, like: 0},
      { id : 1, title : "pull 2", price : 21, quantity : 10, like: 1},
      { id : 1, title : "pull 3", price : 16, quantity : 8, like: 2},
      ]
      const a = 5 ; 
  }


}
