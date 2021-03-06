import { configHelper } from './../configHelper';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpProvider } from '../http.provider';
import { ClienteModel } from './cliente.model';
@Injectable()
export class ClienteService {

url;
constructor(private http: HttpProvider) {
   this.url = `${configHelper.URL}/clientes`;
}


  getClients(): Observable<ClienteModel[]>  {
    return this.http.get(`${this.url}`);
  }

  getClientsByIdUser(id: string): Observable<ClienteModel[]>  {
    return this.http.get(`${this.url}/usuario/${id}`);
  }

  includesClient(data: ClienteModel): Observable<ClienteModel[]>{
    return this.http.post(`${this.url}`, data);
  }

  alterClient(data, id): Observable<ClienteModel[]>{
    console.log('id chegou', id)
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteClient(id): Observable<ClienteModel[]>{
  return this.http.delete(`${this.url}`, id)
  }

}
