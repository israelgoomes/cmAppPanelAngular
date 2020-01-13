import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styles: []
})
export class TestesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventEmiter(event){
    console.log('Eventod do componente',event)
  }

}
