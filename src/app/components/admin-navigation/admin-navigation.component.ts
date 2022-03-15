import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {
  public admin: Admin =new Admin;
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  this.adminService.getAdmin().subscribe(data => {
    console.log(data); 
    this.admin= data;    
})
}
}
