import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetails;
  loginForm: FormGroup;
  loading = false;
  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private readonly loginService: LoginService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.userDetails = localStorage.getItem('userDetails');
    if (!!this.userDetails) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.loginService.getUserDetails(this.loginForm.value).subscribe(user => {
      localStorage.setItem('userDetails', JSON.stringify(user));
      this.loading = false;
      this.router.navigate(['dashboard']);
    },
    error => {
      this.loading = false;
    });
  }

}
