import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConditionalExpr } from '@angular/compiler';
import { configHelper } from '../configHelper';
@Injectable()
export class LoginService {
  url: string;

  constructor(private http: HttpClient) {
    // const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    // tslint:disable-next-line: quotemark
    this.url = "https://marcenarianovadesign.com.br/api/";
    // fetch(proxyurl + this.url).then(response => response.text()).then(contents => console.log(contents))
    // .catch(() => console.log("Can’t access " + this.url + " response. Blocked by browser?"));
  }

  public createHeader(header?: HttpHeaders): HttpHeaders {
    if (!header) {
      header = new HttpHeaders();
    }

    header = header.append('Content-type', 'application/json');
    header = header.append('accept', 'application/json');

    const token = localStorage.getItem(configHelper.storageKeys.token);
    console.log('Token no serviço', token);
    if (token) {
      console.log('entrou');
      header = header.append('user-token', token);
    }
    return header;
  }

  authenticate(email, senha): Observable<any> {
    // const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    // this.url = "https://marcenarianovadesign.com.br/api/"
    // fetch(proxyurl + this.url).then(response => response.text()).then(contents => console.log(contents))
    // .catch(() => console.log("Can’t access " + this.url + " response. Blocked by browser?"));

    let header = this.createHeader();
    console.log('Header enviado', header);
    console.log('email', email);
    console.log('senha', senha);
    return this.http.post(
      `${this.url}usuario/autenticar`,
      { email, senha },
      { headers: header }
    );
  }

  registerLogin(result) {
    // console.log('Token', result)
    localStorage.setItem(configHelper.storageKeys.token, result);
    const teste = localStorage.getItem(configHelper.storageKeys.token);
    console.log(teste);
  }

  getAcessToken(): string {
    return localStorage.getItem(configHelper.storageKeys.token);
  }
}
