import { Component, OnInit } from '@angular/core';
import { configHelper } from '../configHelper';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
sair(){
  localStorage.removeItem(configHelper.storageKeys.token)
  window.location.reload();
}
}
