import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Company} from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class ApplycreditService {
   appURL="http://localhost:8083/rms/addApplication";
   resURL="http://localhost:8083/rms/applycredit";

httpOptions = {
    responseType: 'text' as 'json'
  };
  constructor(private http: HttpClient) { }
    addApplication(companydetails:any){
      return this.http.post<any>(`${this.appURL}`,companydetails).pipe(
        map(
            userdata=>{
            console.log(userdata);
            sessionStorage.setItem('companyid',userdata.application.companyId);
            sessionStorage.setItem('loan_amount',userdata.application.loan_amount);
            return userdata;
          }
        )
      );
  }

  applicationResult(){
      return this.http.get<any>(`${this.resURL}`+"/"+sessionStorage.getItem('companyid')+"/"+sessionStorage.getItem('loan_amount'),this.httpOptions);
  }
}
