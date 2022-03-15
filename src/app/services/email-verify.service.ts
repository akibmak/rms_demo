import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailVerifyService {
   //headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
   otpURL="http://localhost:8083/rms/generateotp/1";
   verifyOtpURL="http://localhost:8083/rms/verifyotp";
   
  constructor(public http:HttpClient,public router:Router) { }

  public  generateOtp(emailid:string):Observable<any>{
    console.log(typeof(emailid))
    return this.http.post<any>(`${this.otpURL}`,emailid);
  }

  public verifyOtp(emailId:any,otp:string){
       return this.http.post<any>(`${this.verifyOtpURL}`,{emailId,otp});
  }
}
