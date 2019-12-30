import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient, 
        private loginSrvc: LoginService,
        private spinnerService: Ng4LoadingSpinnerService) {

    }


    getUsers(): Observable<any> {
        const header = this.loginSrvc.createHeader();
        this.spinnerService.show()
        return this.http.get('https://marcenarianovadesign.com.br/api/usuario', {headers: header});

    }
}
