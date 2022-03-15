import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { TopcreditService } from 'src/app/services/topcredit.service';

@Component({
  selector: 'app-loan-applications',
  templateUrl: './loan-applications.component.html',
  styleUrls: ['./loan-applications.component.css']
})
export class LoanApplicationsComponent implements OnInit {
  Company: Company[];
  p:number=1;
  constructor(private topcreditService: TopcreditService) { }

  ngOnInit(): void {
    this.topcreditService.getApplications().subscribe(data => {
      console.log(data);
      this.Company=data;
    })
  }
  key:string='creditvalue';
  reverse:boolean= true;
  sort(key: string){
     this.key=key;
     this.reverse=!this.reverse;
  }

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
