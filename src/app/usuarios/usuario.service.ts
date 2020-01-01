import { configHelper } from './../configHelper';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProvider } from '../http.provider';
import { UserModel } from './user.model';

@Injectable()
export class UsuarioService {
url;
constructor(private http: HttpProvider) {
    this.url = `${configHelper.URL}/usuario`;
}


    getUsers(): Observable<UserModel[]> {
        return this.http.get(this.url);

    }
}
