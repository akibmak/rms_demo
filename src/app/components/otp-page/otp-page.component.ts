import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ApplycreditService } from '../../services/applycredit.service';
import { EmailVerifyService } from '../../services/email-verify.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent implements OnInit {

  constructor(public verifyemailservice:EmailVerifyService, public applyccreditservice:ApplycreditService,private router:Router) { }
  emailid=sessionStorage.getItem('emailId');
  companyId=sessionStorage.getItem('companyId');
  companyName= sessionStorage.getItem('companyName')
  companyvalue= sessionStorage.getItem('companyvalue')
  creditvalue=sessionStorage.getItem('creditvalue')
  loan_amount=sessionStorage.getItem('loan_amount')
  turnover=sessionStorage.getItem('turnover')
  otp='';
  
  ngOnInit(): void {
  }
//-----------verifyingotppp-----------------------
 verifyOtp(){
      this.verifyemailservice.verifyOtp(this.emailid,this.otp).subscribe(data=>{
          if(data.result=="success"){
                alert("otp verified!!!! ");
                this.addApplication();
          }else{
            alert("Invalid Otp");
          }
      });

  }
  applicationdetails={
   "companyId": this.companyId,
   "companyName":this.companyName,
   "companyvalue":this.companyvalue,
   "creditvalue":this.creditvalue,
   "turnover":this.turnover,
   "loan_amount":this.loan_amount,
   "emailId":this.emailid
  }
  addApplication() {
    this. applyccreditservice.addApplication(this.applicationdetails).subscribe(
      data => {
        if(data.result=="success"){
           this.router.navigate(["/dashboard/application-result"]);
        }
        else if(data.result=="faliur"){
                alert(data.message);
              this.router.navigate(['/']);      
        }
      }, error => {
        console.log(error);
        this.router.navigate(['/']);   
      });
  }
}
