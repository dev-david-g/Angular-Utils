import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule],
  declarations: [ AppComponent, PasswordInputComponent ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
