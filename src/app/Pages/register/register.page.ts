import { Component, OnInit } from '@angular/core';
//Added FormBuilder, FormGroup, Validators for using reactive Forms.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//Added ToastController to use toast message.
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //Taken a variable to define the FormGroup.
  registerForm: FormGroup;
  errorMessage: string;
  buttonDisbled: boolean;
  registerData: any;

  validationMessages = {
    userName: [
      {
        type: 'required',
        message: ('Name field can`t blank')
      }
    ],
    email: [
      {
        type: 'required',
        message: ('Email field can`t blank')
      },
      {
        type: 'pattern',
        message: ('Please enter valid email.')
      }
    ],
    contact: [
      {
        type: 'required',
        message: ('Contact field can`t blank')
      },
      {
        type: 'pattern',
        message: ('Please enter valid mobile number.')
      }
    ],
    password: [
      {
        type: 'required',
        message: ('password field can`t blank')
      },
      {
        type: 'minLength',
        message: ('Password should be min in 6 words.')
      },
      {
        type: 'maxLength',
        message: ('Password should be not more than in 12 words.')
      },
      {
        type: 'pattern',
        message: ('Your password must start with one uppercase, one lowercase, and one number')
      }
    ],
    confirmPassword: [
      {
        type: 'required',
        message: ('confirmPassword field can`t blank')
      },
      {
        type: 'minLength',
        message: ('Password should be min in 6 words.')
      },
      {
        type: 'maxLength',
        message: ('Password should be not more than in 12 words.')
      },
      {
        type: 'pattern',
        message: ('Please enter valid password')
      }
    ]
  };

  constructor(private fb: FormBuilder, public router: Router, public toastController: ToastController) { 
    this.registerForm = this.fb.group({
      userName: ['',[Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
        ]
      ],
      contact: [
        '',
        [
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]],
      confirmPassword:  ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    },
    // {validator: MustMatch('password', 'confirmPassword')}
    );
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You have created your account successfully.',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  // ngDoCheck() {
  //   if (
  //     this.registerForm.value.name ||
  //     this.registerForm.value.email ||
  //     this.registerForm.value.contact ||
  //     this.registerForm.value.password ||
  //     this.registerForm.value.confirmPassword
  //   ) {
  //     this.buttonDisbled = false;
  //   } else {
  //     this.buttonDisbled = true;
  //   }
  // }

  submit(): void {
    this.registerData = this.registerForm.value;
    console.log(this.registerData);
    if(this.registerData){
      localStorage.setItem("userData", JSON.stringify(this.registerData));
      this.presentToast();
      this.router.navigate(['/login']);
    }
    
  }

}
