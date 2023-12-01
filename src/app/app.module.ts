import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesseionItemComponent } from './sesseion-item/sesseion-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SesseionItemComponent,
    SessionItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
