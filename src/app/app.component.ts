import { Component } from '@angular/core';
import { AnyObject } from 'mongoose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp5';
  typeformation  : string= 'Formation web' ; 
  // Function to modify the name 

  firstSession = {
    id: 1,
    name : "Formation Web",
    track: "Mean Steak",
    date : "Prévue du 11/06/2023 au 15/06/2023",
    local : "Lyon",
    Participants : 0
    };

  ModifyName(p : any){
    console.log(this.typeformation)
    this.typeformation = "Formation Web Avancé" ; 
    // p.Participants ++ ;  
    console.log("Nouvelle Inscription")
  }  

}
