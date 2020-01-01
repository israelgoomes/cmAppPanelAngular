import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteService } from './cliente-service';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from './cliente.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


@Input() cliente: ClienteModel;
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
deleteClient() {

  let r = confirm(`Deseja realmente excluir o cliente ${this.cliente.nome} ?`);

  if (r == true) {
  this.clienteSrvc.deleteClient(this.cliente._id).subscribe(() => {
    console.log(`Cliente excluido`);
    this.ngxService.stop();
    window.location.reload();
    // this.route.navigate(['/usuarios']);
  });
}
}
  emitAddEvent() {
   this.add.emit(this.cliente);
   console.log('cliente', this.cliente);
   this.clienteSrvc.alterClient(this.cliente, this.cliente._id).subscribe(v => {
     this.isEditable = false;
    //  this.ngxService.stop();
     window.location.reload();

    });
  }
}
