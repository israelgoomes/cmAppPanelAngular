import { Component, OnInit } from '@angular/core';
import { configHelper } from './configHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'cmAppPanel';
  token = localStorage.getItem(configHelper.storageKeys.token);
  constructor(private route: Router){
        this.token = localStorage.getItem(configHelper.storageKeys.token)
  }
}
