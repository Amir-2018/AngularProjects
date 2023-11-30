import { Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent {
  
@Output() EventEmetter = new EventEmitter<string>() ; 

add_in_event(elem : string){
  this.EventEmetter.emit(elem) ; 
}
}
