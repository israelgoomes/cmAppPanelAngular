import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GuardsCheckEnd } from '@angular/router';
import { ClienteService } from '../clientes/cliente-service';
import { ClienteModel } from '../clientes/cliente.model';
import { UserModel } from './user.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: UserModel[] = [];
  clientes: ClienteModel[] = [];
  idUser;
  grids: any;
  constructor(private userSrvc: UsuarioService,
              private spinnerService: Ng4LoadingSpinnerService,
              private clienteSrvc: ClienteService,
              ) { }

  ngOnInit() {
    this.spinnerService.show();
    this.userSrvc.getUsers().subscribe(v => {
      this.users = v;
      console.log(this.users)
      this.spinnerService.hide();
    });
  }

  loadClient(param) {
    // tslint:disable-next-line: triple-equals
    if (this.idUser != param._id) {
      this.spinnerService.show();
      console.log(param);
      this.clienteSrvc.getClientsByIdUser(param._id).subscribe(v => {
      this.clientes = v;
      this.spinnerService.hide();
    }
    );
  }
    this.idUser = param._id;
}
}
