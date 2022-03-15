import { Component, OnInit } from '@angular/core';
import { AnalystService } from 'src/app/services/analyst.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyst-profiles',
  templateUrl: './analyst-profiles.component.html',
  styleUrls: ['./analyst-profiles.component.css']
})
export class AnalystProfilesComponent implements OnInit {
  analyst:User[];
  p:number=1;
  constructor(private analystService:AnalystService, public router:Router) { }

  ngOnInit(): void {
    this.analystService.getAnalysts().subscribe(data=>{
      console.log(data);
      this.analyst=data;
    });
  }
    
  Id:any;
  public Search(): void{
      if(this.Id==""){
           this.ngOnInit();
      }else{
         this.analyst= this.analyst.filter(res=>{
               return res.id.toLocaleString().match(this.Id.toLocaleString());
         });

      }
  }
  tempAnalystID:any;
  setID(analyst: {id:number; }){
     this.tempAnalystID= analyst.id;
     console.log(this.tempAnalystID);
    this.removeAnalyst(this.tempAnalystID);
  }

  removeAnalyst(id:any){
     this.analystService.deleteAnalyst(id).subscribe(data=>{
        console.log(data);
         this.router.navigate(['/admin-dashboard/analyst-profiles']);
        alert("analyst deleted successfully!!!");
     },error=>{
        console.log(error);
        this.router.navigate(['/admin-dashboard/analyst-profiles']);
        alert("error occured!!");
     })
  }
}
