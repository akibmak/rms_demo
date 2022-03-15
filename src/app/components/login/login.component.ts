import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.userName, this.password).subscribe(
      data =>{
        console.log(data);
        sessionStorage.setItem('token',data.token) 
        if(this.userName.startsWith("admin")){
              sessionStorage.setItem('adminId',data.user.id)
              sessionStorage.setItem('adminName',data.user.userName)
              this.router.navigate(['/admin-dashboard']) 
        }else{
              this.router.navigate(['/analyst-dashboard'])
        }       
        this.invalidLogin = false
      },
      error => {
        alert("invalid credentials")
        this.router.navigate(['login'])
        this.invalidLogin = true

      }
    )
    );

  }

}
