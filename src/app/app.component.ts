import { Component } from '@angular/core';
import { AnyObject } from 'mongoose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp5';
  typeformation  : string= '   web' ; 
  // Function to modify the name 

  firstSession = {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: ((((new Date('2018-06-13').toISOString().split('T')[0]).replaceAll('-',' | ')).split(' | ').reverse()).toString()).replaceAll(',',' | '),
    duree: 3,
    local: 'Lyon',
    Participants: 0
    };



}
