import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { configHelper } from '../configHelper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSrvc: LoginService, 
              private route: Router,
              private ngxService: NgxUiLoaderService
              ) { }

  ngOnInit() {
    console.log(localStorage.getItem(configHelper.storageKeys.token))
    if(localStorage.getItem(configHelper.storageKeys.token)){
      console.log('teste')
      this.route.navigate(['/usuarios'])
    }
  }

  login(f: NgForm){
    console.log(f.value.login)
    this.loginSrvc.authenticate(f.value.login, f.value.senha).subscribe(data=>{
      console.log('token enviado', data.token)
      this.loginSrvc.registerLogin(data.token);
      this.ngxService.stop();
      this.route.navigate(['/app'])
      window.location.reload();
    });
  }

}
