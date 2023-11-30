import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetA'; 

  items = ['item1','item2','item3','item4']

  Add_Item(item : string) : void{
    this.items.push(item) ; 
  }

}
