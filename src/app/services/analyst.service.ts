import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AnalystService {
   getAnalystURL="http://localhost:8083/rms/getAllUser";
   deleteAnalystURL="http://localhost:8083/rms/deletUser";
   addAnalystURL="http://localhost:8083/rms/addAnalyst";
  constructor(public http:HttpClient) { }

  public getAnalysts():Observable<any>{
      return this.http.get<any>(`${this.getAnalystURL}`);
  }

  public deleteAnalyst(id:any):Observable<any>{
    return this.http.delete<any>(`${this.deleteAnalystURL}`+"/"+id);
  }
  public addAnalyst(user:User):Observable<any>{
    return this.http.post<any>(`${this.addAnalystURL}`,user);
  }
}
