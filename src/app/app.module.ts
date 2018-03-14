import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { FlexLayoutModule, MediaService } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { FormCardComponent } from './form-card/form-card.component';
import { CharacterPropsService } from './services/character-props.service';
import { ToPercentPipe } from './utils/to-percent.pipe';
import { PhysicalEhancePropsService } from './services/physical-props.service';
import { DamageService } from './services/damage.service';


@NgModule({
  declarations: [
    AppComponent,
    FormCardComponent,
    ToPercentPipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    CharacterPropsService,
    PhysicalEhancePropsService,
    DamageService,
    MediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
