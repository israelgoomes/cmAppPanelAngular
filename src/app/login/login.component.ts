import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { ClientesComponent } from '../clientes/clientes.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
  }

  login(f: NgForm){
    console.log(f.value.login)
    this.loginSrvc.authenticate(f.value.login, f.value.senha).subscribe(data=>{
      console.log('token enviado', data.token)
      this.loginSrvc.registerLogin(data.token);
      this.ngxService.stop();
      this.route.navigate(['/usuarios']);
    });
  }

}
