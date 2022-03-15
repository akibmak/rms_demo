import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionReports } from '../../model/action-reports';
import { ApprovedApplications } from '../../model/approved-applications';
import { Company } from '../../model/company';
import { EditApplicationService } from '../../services/edit-application.service';
import { EmailNotification } from '../../model/email-notification';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {
  company:Company= new Company();
  applicationStatus:ApprovedApplications = new ApprovedApplications();
  actionreport: ActionReports= new ActionReports();
  sendemail: EmailNotification= new EmailNotification();
  reportDesc='';

  constructor(private router: Router,private editAppService:EditApplicationService) { 
    
  }
   
  ngOnInit(): void {
    this.editAppService.getApplication().subscribe(data => {
      console.log(data);
      this.company.companyId= data.appli.companyId;
      this.company.companyName= data.appli.companyName;
      this.company.companyvalue=data.appli.companyvalue;
      this.company.creditvalue= data.appli.creditvalue;
      this.company.turnover= data.appli.turnover;
      this.company.loan_amount=data.appli.loan_amount;
      this.company.emailId= data.appli.emailId;
      //application status
      this.applicationStatus.companyId= data.appli.companyId;
      this.applicationStatus.companyName= data.appli.companyName;
      this.applicationStatus.companyvalue=data.appli.companyvalue;
      this.applicationStatus.creditvalue= data.appli.creditvalue;
      this.applicationStatus.turnover= data.appli.turnover;
      this.applicationStatus.loan_amount=data.appli.loan_amount;
      this.applicationStatus.emailId= data.appli.emailId;
      //actionreports
      this.actionreport.companyId=data.appli.companyId;
      this.actionreport.emailId=data.appli.emailId;
    })
  }

  public acceptApplication(){
     this.applicationStatus.status="Accepted";
     this.applicationStatus.baId=sessionStorage.getItem('userId');
     console.log(this.applicationStatus);
     this.editAppService.acceptApplication().subscribe(data=>{
         alert("application accepted successfully!!!!!");
         console.log(data);
         this.sendNotification(2);
         this.router.navigate(["/analyst-dashboard/top-credit"]);
     },error=>{
        alert("Error Occured!!!");
        console.log(error);
     }
     );
  }
//Reject------------------------------------
  public deleteApplication(){
    console.log(this.applicationStatus);
    this.editAppService.deleteApplication().subscribe(data=>{
          alert("applicationdeleted scuccessfully");
          this.sendNotification(3);
         this.router.navigate(['/analyst-dashboard/top-credit']);
    },error=>{
      alert("Error Occured!!!");
      console.log(error);
   });
  }

  //report textbar------------------------------
  public show:boolean=false;
  report(){
    this.show=!this.show;
  }
//submitreport------------------------------------
  submitReport(){
     this.actionreport.baId=sessionStorage.getItem('userId');
     this.actionreport.description= this.reportDesc;
      this.editAppService.addReport(this.actionreport).subscribe(data=>{
            alert("report saved!!!!");
            console.log(data);
            this.sendNotification(4);
             this.router.navigate(['/analyst-dashboard/top-credit']);
      },error=>{
        alert("Error Occured!!!");
        console.log(error);
     }
      );
  }

   //send notification on user email------------------------------
   messageDecs= "";
   sendto= this.sendemail.to;
public   sendNotification(code:any){
    this.sendto=this.applicationStatus.emailId; 
    if(code==4){
      this.messageDecs= this.reportDesc;
    }
     this.sendemail={
        "message":this.messageDecs,
        "to":this.sendto,
        "subject":""
     }
    this.editAppService.sendNotificationOnEmail(this.sendemail,code).subscribe(data=>{
              console.log(data);  
              this.router.navigate(['/analyst-dashboard/top-credit']);    
     },error=>{
      alert("Error Occured!!!");
      console.log(error);
   })

  }
}
