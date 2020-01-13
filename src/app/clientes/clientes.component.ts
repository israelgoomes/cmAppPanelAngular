import { ClienteModel } from 'src/app/clientes/cliente.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteService } from './cliente-service';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


@Input() clientes: ClienteModel[];
isEditable: boolean;
@Output() public add = new EventEmitter();

  constructor(private clienteSrvc: ClienteService,
              private route: Router,
              private ngxService: NgxUiLoaderService
              ) { }

  ngOnInit() {
  }
onEdit() {
  this.isEditable = true;
}
offEdit() {
  this.isEditable = false;
}
deleteClient(cliente: ClienteModel) {

  let r = confirm(`Deseja realmente excluir o cliente ${cliente.nome} ?`);

  if (r == true) {
  this.clienteSrvc.deleteClient(cliente._id).subscribe(() => {
    console.log(`Cliente excluido`);
    this.ngxService.stop();
    window.location.reload();
    // this.route.navigate(['/usuarios']);
  });
}
}
  emitAddEvent(cliente: ClienteModel) {
   this.add.emit(cliente);
   console.log('cliente', cliente);
   this.clienteSrvc.alterClient(cliente, cliente._id).subscribe(v => {
     this.isEditable = false;
    //  this.ngxService.stop();
     window.location.reload();

    });
  }
}
