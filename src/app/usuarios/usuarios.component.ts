import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GuardsCheckEnd, Router } from '@angular/router';
import { ClienteService } from '../clientes/cliente-service';
import { ClienteModel } from '../clientes/cliente.model';
import { UserModel } from './user.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { configHelper } from '../configHelper';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: UserModel[] = [];
  clientes: ClienteModel[] = [];
  idUser;
  token
  constructor(private userSrvc: UsuarioService,
              private ngxService: NgxUiLoaderService,
              private route: Router
              ) {
                this.token = localStorage.getItem(configHelper.storageKeys.token)
              }

  ngOnInit() {

    if(!this.token){
      this.route.navigate([''])
    }else{
      if (this.users.length == 0) {
        this.userSrvc.getUsers().subscribe(v => {
          this.users = v;
          this.ngxService.stop();
        });
    }  
 }
}

}
