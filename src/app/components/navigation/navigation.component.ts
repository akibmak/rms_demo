import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'inspector';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
   public role: string;
  public user: User =new User;
  constructor(private userService: UserService, private router: Router,private authService:AuthenticationService) {}

  ngOnInit(): void {
 
  this.userService.getUser().subscribe(data => {
      console.log(data); 
      this.user = data;     
  })
    
  }
  signOut() {
    this.authService.logOut();
  }
}
