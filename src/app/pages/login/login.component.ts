import {Component, OnInit} from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { DatabaseService } from '../database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logfail = 'false';
  logsucc = 'false';
  logwarn = 'false';
  loader = 'false';
  message = '';
  reset;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.logfail = 'false';
    this.logsucc = 'false';
    this.logwarn = 'false';
    this.loader = 'false';
    this.reset = 'false';
    this.message = '';
  }

  // login(form: NgForm) {
  login() {
    // if (form.valid) {
    //   this.loader = 'true';
    //   // this.database.login(form.value.email, form.value.password).then((data) => {
    //   //   this.loader = 'false';
    //   //   this.logsucc = 'true';
    //   //
    //   // }).catch((error) => {
    //   //   this.loader = 'false';
    //   //   this.logfail = 'true';
    //   //   this.message = error.message;
    //   // });
    // } else {
    //   this.logwarn = 'true';
    // }

  }

  resetpassword() {
  }

  cancelModal() {
    // this.router.navigate(["home"]);
    // this.logsucc = 'false';
  }

  nextpage(page: string) {
    // this.router.navigate([page]);
  }

}
