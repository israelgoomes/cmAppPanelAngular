import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../user.model';
import { ClienteModel } from 'src/app/clientes/cliente.model';
import { ClienteService } from '../../clientes/cliente-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  idUser;
  @Input() usuario: UserModel;
  @Input () clientes: ClienteModel[] = [];
  constructor(private clienteSrvc: ClienteService,
              private ngxService:NgxUiLoaderService
    ) { }

  ngOnInit() {
    console.log('user', this.usuario)
    this.idUser = null;
  }


  loadClient(param) {
    console.log(this.idUser)
    if (this.idUser != param._id || this.idUser == null) {
   this.ngxService.start();
   this.clienteSrvc.getClientsByIdUser(param._id).subscribe(v => {
   this.clientes = v;
   this.ngxService.stop();
 }
 );
}
    this.idUser = param._id;
}

getEvent(evento) {
  this.idUser = null;
  console.log('teste', evento);
}

}
