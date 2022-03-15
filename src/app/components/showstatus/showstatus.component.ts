import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { TrackstatusService } from 'src/app/services/trackstatus.service';

@Component({
  selector: 'app-showstatus',
  templateUrl: './showstatus.component.html',
  styleUrls: ['./showstatus.component.css']
})
export class ShowstatusComponent implements OnInit {
  company: Company[];
  index=0;
  constructor(private router:Router,private showstatusService:TrackstatusService) { }

  ngOnInit(): void {
    this.getStatus();
  }
   
  public getStatus(){
    this.showstatusService.trackStatus(sessionStorage.getItem('trackemail')).subscribe(
      data=>{
            console.log(data);
             this.company=data;
    },error=>{
           console.log(error);
    });
  }

}
