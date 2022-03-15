import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
   forgetURL="http://localhost:8083/rms/forgetpassword";
  constructor(public http:HttpClient) { }

 public  forgetpassword(username:any,userid:any,newpass:any):Observable<any>{
      return this.http.get<any>(`${this.forgetURL}`+"/"+userid+"/"+username+"/"+newpass);
  }
}
