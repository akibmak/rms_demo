import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackstatusService {
   getStatus="http://localhost:8083/rms/getdetails";
  ifPresentURL="http://localhost:8083/rms/ifpresent";
  constructor(private http:HttpClient) { }

  public trackStatus(email:any):Observable<any>{
       return this.http.get<any>(`${this.getStatus}`+"/"+email);
  }
public findByEmail(email:any):Observable<any>{
        return this.http.get<any>(`${this.ifPresentURL}`+"/"+email);
}


}
