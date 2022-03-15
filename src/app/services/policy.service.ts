import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
   getPolicyURL="http://localhost:8083/rms/getPolicies";
   getPolicyIdURL="http://localhost:8083/rms/getPolicy";
   delPolicyURL="http://localhost:8083/rms/deletePolicy";
   updPolicyURL="http://localhost:8083/rms/updatePolicy";
   addPolicyURL="http://localhost:8083/rms/addPolicies";
  constructor(private http:HttpClient) { }

  public getPolicies():Observable<any>{
       return this.http.get<any>(`${this.getPolicyURL}`); 
  }

  public  deletePolicy(id:any):Observable<any>{
       return this.http.delete<any>(`${this.delPolicyURL}`+"/"+id);
  }
  public updatePolicy(policydetails:any):Observable<any>{
       return this.http.put<any>(`${this.updPolicyURL}`,policydetails);
  }

  public addPolicy(policydetails:any):Observable<any>{
        return this.http.post<any>(`${this.addPolicyURL}`,policydetails);
  }

  public getPolicyByID(id:any):Observable<any>{
        return this.http.get<any>(`${this.getPolicyIdURL}`+"/"+id);
  }
}
