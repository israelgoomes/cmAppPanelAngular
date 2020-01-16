import { ProjetoModel } from './projeto.model';
import { HttpProvider } from './../http.provider';
import { configHelper } from './../configHelper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ProjetoService {

        url: string; 
        constructor(private http: HttpProvider){
                this.url = `${configHelper.URL}/projetos`
        }
        
        getProjectByIdClient(id): Observable<ProjetoModel[]>{
                return this.http.get(`${this.url}/cliente/${id}`)
        }

        editProject(id, data): Observable<ProjetoModel>{
                console.log('id no servicp', id)
                return this.http.put(`${this.url}/${id}`, data)
        }

}