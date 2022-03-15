import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActionReports } from '../model/action-reports';
import { ApprovedApplications } from '../model/approved-applications';
import { Company } from '../model/company';
import { EmailNotification } from '../model/email-notification';

@Injectable({
  providedIn: 'root'
})
export class EditApplicationService {

 
  httpOptions = {
    responseType: 'text' as 'json'
  };
  deleteURL="http://localhost:8083/rms/deleteApplication";
  getAppURL="http://localhost:8083/rms/getApplication";
  acceptURL= "http://localhost:8083/rms/acceptApplication";
  reportURL="http://localhost:8083/rms/report";
  notifyURL="http://localhost:8083/rms/sendmail";

  constructor(public http:HttpClient, private router:Router) { }
   
    public getApplication():Observable<any>{
      return this.http.get<Company>(`${this.getAppURL}`+"/"+sessionStorage.getItem('companyID'));
    }

   public deleteApplication():Observable<any>{
     return this.http.delete<any>(`${this.deleteURL}`+"/"+sessionStorage.getItem('companyID')+"/"+sessionStorage.getItem('userId'));
  }

  public acceptApplication():Observable<any>{
       return this.http.get<any>(`${this.acceptURL}`+"/"+sessionStorage.getItem('companyID')+"/"+sessionStorage.getItem('userId'));
  }

  public addReport(actionReport :ActionReports):Observable<any>{
       return this.http.post<ActionReports>(`${this.reportURL}`,actionReport);
  }

  public sendNotificationOnEmail(emailNotify:any,code:any):Observable<any>{
       return this.http.post<EmailNotification>(`${this.notifyURL}`+"/"+code,emailNotify);
  }
}
