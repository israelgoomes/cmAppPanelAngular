import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient, private loginSrvc: LoginService) {

    }


    getUsers(): Observable<any> {
        const header = this.loginSrvc.createHeader();
        return this.http.get('https://marcenarianovadesign.com.br/api/usuario', {headers: header});

    }
}
