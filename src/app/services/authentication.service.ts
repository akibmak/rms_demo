import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   loginURL="http://localhost:8083/rms/login";
  constructor( private httpClient: HttpClient,private router:Router){ }

 public authenticate(userName:string, password:string) {
    return this.httpClient.post<any>(`${this.loginURL}`,{userName,password}).pipe(
     map(
       userData => {
         console.log(userData);
        sessionStorage.setItem('username',userData.userName);
        sessionStorage.setItem('userId',userData.user.id);
        //sessionStorage.setItem('token', userData.token);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
  }

}
