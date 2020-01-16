import { ProjetoService } from './projeto.service';
import { ClienteModel } from 'src/app/clientes/cliente.model';
import { ClienteService } from './../clientes/cliente-service';
import { ProjetoModel } from './projeto.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
formProject: FormGroup
isDisabled: boolean = false;
isEditable: boolean = false;
clientes: ClienteModel[];
@Input() projeto: ProjetoModel;
@Output() getResult = new EventEmitter<ProjetoModel>();
selected = 'option2';
  constructor(private fb: FormBuilder, 
              private clienteSrvc: ClienteService, 
              private ngxService: NgxUiLoaderService, 
              private projetoSrvc: ProjetoService,
              private router: Router
              ) { 
  }

  ngOnInit() {
    this.ngxService.start();
    this.clienteSrvc.getClientsByIdUser(this.projeto.usuario).subscribe(v => {
    this.clientes = v;
    this.ngxService.stop();
  }
  );

    this.formProject = this.fb.group({
      tituloProjeto: [this.projeto.tituloProjeto, Validators.required],
      foto: this.projeto.foto,
      cliente: this.projeto.cliente._id,
      //clienteEmail: this.projeto.cliente.email,
      descricaoProjeto: this.projeto.descricaoProjeto,
      preco: this.projeto.preco,
      status: this.projeto.status,
    })
    this.formProject.disable()
  }

  activeEdit(){
    this.isDisabled = this.isDisabled == false ? true : false;
if(this.isDisabled == true){
  this.formProject.disable();
}else{
  this.formProject.enable()
}
  }

  activeOrDisables(){
    let inOut: any = document.getElementById('inOut')
    console.log(`Elemento`, inOut.value)
    if(inOut.value == 'Ativo'){
        inOut.value = 'Inativo';
        this.formProject.value.status = false;
        this.projeto.status = false;
    }else if(inOut.value == 'Inativo'){
      inOut.value = 'Ativo';
      this.formProject.value.status = true;
      this.projeto.status = true;
    }
  }

getEvent(event){
  this.formProject.value.cliente._id = event;
  console.log(this.formProject.value);

}

  salvar(){
    console.log('id', this.projeto._id)
    console.log('id', this.formProject.value)
this.projetoSrvc.editProject(this.projeto._id, this.formProject.value).subscribe(v=>{
  console.log('Registro atualizado com sucesso.')
  window.location.reload();
})
  }

enableEdit(){
  console.log(!this.isEditable)
  this.isEditable = !this.isEditable;

  if(this.isEditable){
    this.formProject.enable()
  }else{
    this.formProject.disable()
  }
}


sendEvent(){
  console.log(this.formProject.value)
this.getResult.emit(this.formProject.value)
}
}
