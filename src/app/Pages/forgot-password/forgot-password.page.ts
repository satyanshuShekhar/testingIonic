import { Component, OnInit } from '@angular/core';

import {ReactiveFormsModule, FormGroup , FormControl , Validators, FormBuilder}from '@angular/forms' ;
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

export class ForgotPasswordPage  {
  get email(){
    return this.ForgotForm.get("email");
  }
 
  ForgotForm =this.formBuilder.group({
    email:[
      "",  
  [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9.%-]+@[a-zA-Z0-9.-]+.[a-zA-z]{2-4}$")
  ]
]
  });

    

  constructor(private formBuilder:FormBuilder)
   {

 }
 
  
}


