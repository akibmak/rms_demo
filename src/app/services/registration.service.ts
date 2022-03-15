import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseURL="http://localhost:8083/rms/registerUser";
  
  constructor(private http: HttpClient) { }

  public registerUser(user:User):Observable<any>{
     return   this.http.post<any>(`${this.baseURL}`,user);
  }
}
