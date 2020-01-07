import { configHelper } from './../configHelper';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProvider } from '../http.provider';
@Injectable()
export class LoginService {
  url: string;
  constructor(private http: HttpProvider) {
    this.url = `${configHelper.URL}`;
  }
  authenticate(email, senha): Observable<any> {
    return this.http.post(
      `${this.url}/usuario/autenticar`,
      { email, senha },
    );
  }

  registerLogin(result) {
    localStorage.setItem(configHelper.storageKeys.token, result);
  }
}