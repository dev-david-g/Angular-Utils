import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

credentials: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      user: [],
      password: []
    })
  } 

  onSubmit() {
  alert('Logged in with user ' + this.credentials.get('user').value);
}
}
