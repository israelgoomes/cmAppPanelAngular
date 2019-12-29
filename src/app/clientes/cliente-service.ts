import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { ClienteModel } from './cliente.model';
@Injectable()
export class ClienteService {

constructor(private http: HttpClient, private loginSrvc: LoginService) {

}


  getClients(): Observable<any>  {

    const header = this.loginSrvc.createHeader();
    console.log('Header cliente', header);
    return this.http.get('https://marcenarianovadesign.com.br/api/clientes', {headers: header});
  }

  getClientsByIdUser(id: string): Observable<any>  {

    const header = this.loginSrvc.createHeader();
    console.log('Header cliente', header);
    return this.http.get(`https://marcenarianovadesign.com.br/api/clientes/usuario/${id}`, {headers: header});
  }

}
