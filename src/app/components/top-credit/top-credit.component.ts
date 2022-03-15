import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { Company } from '../../model/company';
import { TopcreditService } from '../../services/topcredit.service';

@Component({
  selector: 'app-top-credit',
  templateUrl: './top-credit.component.html',
  styleUrls: ['./top-credit.component.css']
})
export class TopCreditComponent implements OnInit {
  Company: Company[];
  p:number=1;
  constructor(private topcreditService: TopcreditService) { }

//getting data------------------------
  ngOnInit(): void {
    this.topcreditService.getApplications().subscribe(data => {
      console.log(data);
      this.Company=data;
    })
  }
  //sorting-----------------
  key:string='creditvalue';
  reverse:boolean= true;
  sort(key: string){
     this.key=key;
     this.reverse=!this.reverse;
  }
  //setting id------------
  tempCompanyID:string;
  setID(company: { companyId: string; }){
     this.tempCompanyID= company.companyId;
     console.log(this.tempCompanyID);
     sessionStorage.setItem('companyID',this.tempCompanyID);
  }

  //searching-------------
   companyId:any;
  public Search(): void{
      if(this.companyId==""){
           this.ngOnInit();
      }else{
         this.Company= this.Company.filter(res=>{
               return res.companyId.toLocaleString().match(this.companyId.toLocaleString());
         });

      }
  }
}
