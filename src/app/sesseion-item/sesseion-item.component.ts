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
hideButton : boolean = false ; 

// @Input() Date_Formation : string = '' ; 


InscriptionFunction(){
  if(this.session.Participants ==20){
    this.hideButton = true ; 
  }else{
    console.log('Inscription ajoutée')
    this.session.participants ++ ; 
    this.session.name = 'Formation web avancé '
  }

}

@Input() session : any = {}


 
}
