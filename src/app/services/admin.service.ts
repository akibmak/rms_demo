import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   getAdminURL="http://localhost:8083/rms/getAdmin";
   
  constructor(private http: HttpClient) { }
  public getAdmin():Observable<any>{
    return this.http.get<Admin>(`${this.getAdminURL}`+"/"+sessionStorage.getItem('adminId'));
  }
}
