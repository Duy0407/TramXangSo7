import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isRegisterSuccess: boolean = true;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ){
    this.registerForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.email,
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ])
      ],
      password_confirmation: [
        "",
        Validators.compose([
          Validators.required,
        ])
      ],
      name: [
        "",
        Validators.required,
      ],
      phone: [
        "",
        Validators.required,
      ]
    })
  }

  ngOnInit(){
  }

  handleSubmit(){
    alert(1);
  }

  navigateLoginPage(){
    this.router.navigate(['/login'])
  }

}
