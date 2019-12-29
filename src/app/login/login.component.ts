import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { ClientesComponent } from '../clientes/clientes.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSrvc: LoginService, private route: Router) { }

  ngOnInit() {
  }
  
  
  entrar(f: NgForm){
    console.log(f.value.login)
    this.loginSrvc.authenticate(f.value.login, f.value.senha).subscribe(data=>{
      this.loginSrvc.registerLogin(data.token);
      console.log('DADOS', data)
      this.route.navigate(['/usuarios']);
     // this.route.loaChildren(ClientesComponent)
    //  this.router.navigate(['/heroes']);

    });
  }

}
