import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteService } from './cliente-service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from './cliente.model';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


@Input() cliente: ClienteModel;
isEditable: boolean;
@Output() public add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
onEdit(){
  this.isEditable = true;
}
offEdit(){
  this.isEditable = false
}

  emitAddEvent(){
   this.add.emit(this.cliente)
  }
}
