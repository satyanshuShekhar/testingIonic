import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ReactiveFormsModule, FormGroup , FormControl , Validators, FormBuilder}from '@angular/forms' ;
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

export class ForgotPasswordPage  {


    

 
 constructor(public alertController: AlertController) {}

 async presentAlert() {
   const alert = await this.alertController.create({
     header: 'Alert',
     subHeader: 'Subtitle',
     message: 'This is an alert message.',
     buttons: ['OK']
  
   });
   await alert.present();
  }
  

  ForgotPassword{
    this.presentAlert();
  }

}


 
  



