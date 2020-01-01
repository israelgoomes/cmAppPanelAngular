import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GuardsCheckEnd } from '@angular/router';
import { ClienteService } from '../clientes/cliente-service';
import { ClienteModel } from '../clientes/cliente.model';
import { UserModel } from './user.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: UserModel[] = [];
  clientes: ClienteModel[] = [];
  idUser;
  constructor(private userSrvc: UsuarioService,
              private ngxService: NgxUiLoaderService
              ) {
              }

  ngOnInit() {
    console.log('NgOInit')
    // tslint:disable-next-line: triple-equals
    if (this.users.length == 0) {
    this.userSrvc.getUsers().subscribe(v => {
      this.users = v;
      this.ngxService.stop();
    });
}
  }

}
