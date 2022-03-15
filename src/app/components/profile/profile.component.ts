import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id : number;
  user: User = new User();
  constructor(private profileService:UserService) { }

  ngOnInit(): void {
    this.profileService.getUser().subscribe(data => {
      console.log(data);
      this.user.id= data.id;
      this.user.userName= data.userName;
      this.user.phone=data.phone;
      this.user.email= data.email;
    })
  }

}
