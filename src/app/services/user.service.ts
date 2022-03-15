import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  tokenstr="Bearer "+sessionStorage.getItem('token');
 requestOptions: Object = {
    responseType:'text'
  }
   loan_amount='';
  getUserURL="http://localhost:8083/rms/getUser";
  loanURL="http://localhost:8083/rms/applycredit";
  constructor(private http: HttpClient) { }

  public getUser():Observable<any>{
    return this.http.get<User>(`${this.getUserURL}`+"/"+sessionStorage.getItem('userId'));
  }

  public approveApplicationOfCredit(amount:number,companyValue:number):Observable<any>{
    return this.http.get<String>(`${this.loanURL}`+"/"+sessionStorage.getItem('username')+"/"+amount+"/"+companyValue,this.requestOptions);
  }
  }
