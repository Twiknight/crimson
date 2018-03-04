import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { FormCardComponent } from './form-card/form-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FormCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
