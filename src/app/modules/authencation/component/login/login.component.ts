import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/Service/auth.service';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoginSuccess: boolean = true;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: SnackbarComponent,
  ){
    this.loginForm = this.formBuilder.group({
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
    })
  }

  ngOnInit(){
  }

  handleSubmit(){
    this.isLoginSuccess = false;
    this.authService.getLogin(this.loginForm.value).subscribe(
      (response) => {
        sessionStorage.setItem('token', response.success);
        sessionStorage.setItem('userId', response.userId);
        this.router.navigate(['/restaurant']);
        this.snackBar.openSnackBar("Login Success", "success-snackbar");
      },
      (error) => {
        let messageError = error.error.error;
        if (!messageError) {
          messageError = 'Lỗi Nghiêm Trọng';
        }
        this.snackBar.openSnackBar(messageError, "error-snackbar");
        this.isLoginSuccess = true;
      }
    )
  }

  navigateRegisterPage(){
    this.router.navigate(['/register'])
  }

}
