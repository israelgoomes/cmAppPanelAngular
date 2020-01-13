import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
formGroup: FormGroup;
  
@Output() public event = new EventEmitter();
constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      nome: '',
      tel: '',
      email: '',
      cep: '',
      endereco: '',
      bairro: '',
      cidade: '',
      estado: '',
      usuario: ''
    })
  }


  emitEvent(){
    this.event.emit(this.formGroup.value);
  }
}
