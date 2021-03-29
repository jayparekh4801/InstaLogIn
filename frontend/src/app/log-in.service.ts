import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http : HttpClient) { }

  logInData(data : any) {
    return this.http.post("signIn", data);
  }
}
