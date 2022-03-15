import { Component, OnInit } from '@angular/core';
import { ApprovedApplications } from '../../model/approved-applications';
import { GetApplicationsStatusService } from '../../services/get-applications-status.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  p:number=1;
 applicationstatus:ApprovedApplications[];
  constructor( public getStatusService:GetApplicationsStatusService) { }

  ngOnInit(): void {
    this.getStatusService.getApplicationsStatus().subscribe(data => {
      console.log(data);
      this.applicationstatus=data;
    })
  }
  //sorting--------------------
  key:string='creditvalue';
  reverse:boolean= true;
  sort(key: string){
     this.key=key;
     this.reverse=!this.reverse;
  }
}
