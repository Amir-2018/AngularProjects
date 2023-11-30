import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-list-products-component',
  templateUrl: './list-products-component.component.html',
  styleUrls: ['./list-products-component.component.css']
})
export class ListProductsComponentComponent {
  ListProduct  : Product[] = []
  ngOnInit(){
    this.ListProduct    = [
      {
        id : 1 , 
        title : "Product1", 
        price : 1200, 
        quantity : 12, 
        like : 10 
      },
      {
        id : 2 , 
        title : "Product2", 
        price : 1201, 
        quantity : 13, 
        like : 11 
      },
      {
        id : 3 , 
        title : "Product3", 
        price : 1203, 
        quantity : 15, 
        like : 13 
      }
    ]
  }
  // Increment product like 
  incrementLike(p:Product){
    console.log(p.title) ; 
    p.like +=1; 
  }

}
