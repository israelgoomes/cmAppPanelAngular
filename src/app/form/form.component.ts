import { Component, OnInit, Input, ContentChild, AfterContentInit, Output, EventEmitter } from '@angular/core';
import {NgModel, FormBuilder, FormGroup, FormControl} from '@angular/forms'
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {


  //@Input() label: string;
  @Output() add = new EventEmitter();

 // @ContentChild(NgModel) model: NgModel;
  formGroup: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      lastName: ''
    })
  }

// ngAfterContentInit(){
//   this.input = this.model;

//   if(this.input === undefined){
//     throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
//   }
// }

emitEvent(){
  this.add.emit(this.formGroup.value);
}

}
