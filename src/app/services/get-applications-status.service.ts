import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApplicationsStatusService {

constructor(public router:Router,public http:HttpClient) { }
  getStatus="http://localhost:8083/rms/getApplicationStatus";
 public  getApplicationsStatus():Observable<any>{
      return this.http.get<any>(`${this.getStatus}`);
  }
}
