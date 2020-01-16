import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'
@Component({
  selector: 'web-select',
  templateUrl: './web-select.component.html',
  styleUrls: ['./web-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>WebSelectComponent),
    multi: true
  }]
})
export class WebSelectComponent implements OnInit , ControlValueAccessor{

  @Input() label: string;
  @Input() items: any[];
  @Input() vlAtribuido: any;
  @Input() view: any;
  @Input() vlInicial: any;
  @Output() itemSelected = new EventEmitter();
  onChange: any;
  value: any;
  constructor() { }

  ngOnInit() {
   let vl: any = document.querySelector('span.ng-tns-c12-139.ng-star-inserted')
   //vl.innerText = 'Israel Gomes';
     console.log('Valor inicial', this.vlInicial)
  }

  eventEmitter(event){
    console.log(`Evento do select`, event[this.value])
    this.itemSelected.emit(event[this.value])
  }

  setValue(value: any){
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void{
  this.value = obj;

  }

  registerOnChange(fn: any): void{
    this.onChange = fn;
  };
  registerOnTouched(fn: any): void{}
  

}
