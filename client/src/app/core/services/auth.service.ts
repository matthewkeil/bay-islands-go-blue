import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoginData, RegistrationData, AuthToken} from '@app/auth';

type Method = 'post' | 'put' | 'delete';

@Injectable()
export class AuthService {

  private url = 'http://localhost:3000/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  login(data: LoginData) {
    return this.http.post<AuthToken>(this.url + 'auth/login', data, this.httpOptions);
  }

  register(data: RegistrationData) {
    return this.http.post<AuthToken>(this.url + 'auth/register', data, this.httpOptions);
  }
}
