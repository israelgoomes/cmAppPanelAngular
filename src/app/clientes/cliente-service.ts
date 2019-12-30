import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { ClienteModel } from './cliente.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Injectable()
export class ClienteService {
url = `https://marcenarianovadesign.com.br/api/`
constructor(private http: HttpClient, 
          private loginSrvc: LoginService,
          private spinnerService: Ng4LoadingSpinnerService
          ) {


}


  getClients(): Observable<any>  {

    const header = this.loginSrvc.createHeader();
    console.log('Header cliente', header);
    return this.http.get(`${this.url}/clientes`, {headers: header});
  }

  getClientsByIdUser(id: string): Observable<any>  {

    const header = this.loginSrvc.createHeader();
    console.log('Header cliente', header);
    this.spinnerService.show()
    return this.http.get(`https://marcenarianovadesign.com.br/api/clientes/usuario/${id}`, {headers: header});
  }

  alterClient(data, id): Observable<any>{
     const header = this.loginSrvc.createHeader();
    return this.http.put(`${this.url}clientes/${id}`, data, {headers: header});
  }

  deleteClient(id): Observable<any>{
    const header = this.loginSrvc.createHeader();
  return this.http.delete(`${this.url}clientes/${id}`, {headers: header})
  }

}
