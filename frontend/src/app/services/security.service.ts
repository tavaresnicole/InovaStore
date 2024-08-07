import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<{message: string; user: string}>('http://localhost:3000/login', {email: email, password: password});
  }

  register(name: string, email: string, password: string) {
    return this.httpClient.post<{message: string}>('http://localhost:3000/register', {name: name, email: email, password: password});
  }
}
