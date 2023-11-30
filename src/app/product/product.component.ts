import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent {
  @Input() productObj : Product  = {
    id: 0,
    title: '',
    price: 0,
    quantity: 0,
    like: 0
  } ; 
  @Output() EventEmetter = new EventEmitter<Product>() ; 

  incEvent(value : Product) : void{
    this.EventEmetter.emit(value)
  }

}
