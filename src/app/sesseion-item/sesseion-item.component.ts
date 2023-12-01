import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AnyObject } from 'mongoose';

@Component({
  selector: 'app-sesseion-item',
  templateUrl: './sesseion-item.component.html',
  styleUrls: ['./sesseion-item.component.css']
})
export class SesseionItemComponent {
  
@Input() session_item : string = ''

@Output() EventEmetter = new EventEmitter<any>() ; 

AddIntoEvent(val :any){
  this.session.Participants ++ ; 
  this.session.name = 'Formation web avancé '
}

@Input() session : any = {}


 
}
