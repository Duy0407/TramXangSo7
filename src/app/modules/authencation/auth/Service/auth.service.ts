import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuth, IAuthLogin } from '../Interface/auth-interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLogin(payLoad: IAuthLogin){
    return this.http.post<IAuth>(`${environment.baseUrl}/login`, payLoad);
  }

}
