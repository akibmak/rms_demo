import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class TopcreditService {
   topURL="http://localhost:8083/rms/topcredits";
  constructor(private http: HttpClient) { }

  public getApplications():Observable<any>{
     return this.http.get<any>(`${this.topURL}`);
  }
}
