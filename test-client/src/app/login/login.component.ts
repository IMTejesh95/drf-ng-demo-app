import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  captcha_resolved: boolean = false;
  resolved(captchaResponse: string) {
    if (captchaResponse) {
      console.log("Captcha Verfied!");
      this.captcha_resolved = true;
    }
  }

  onSubmit() {
    console.log(this.f.username.value, this.f.password.value)
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if (!this.captcha_resolved) {
      alert("Please verify captcha before proceeding!");
      return;
    }

    this.loading = true;
    this.authService.authenticate(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (this.authService.getCurrentUserRole() === 'admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['user']);
          }
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }



}
