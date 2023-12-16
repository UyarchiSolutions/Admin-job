import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private api: CommonService, private route: Router) {}
  ngOnInit(): void {
    this.loggedIn();
  }

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submitted: any = false;
  serError: any = null;

  loggedIn() {
    let token = localStorage.getItem('admintoken');
    if (token) {
      this.route.navigateByUrl('/admin/home');
    }
  }

  login() {
    this.submitted = true;
    console.log(this.loginForm.value, this.submitted);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.api.adminLogin(this.loginForm.value).subscribe(
        (e: any) => {
          localStorage.setItem('admintoken', e.tokens.access.token);
          this.route.navigateByUrl('/admin/home');
        },
        (err: any) => {
          this.serError = err.error.message;
        }
      );
      // adminLogin
    }
  }
}
