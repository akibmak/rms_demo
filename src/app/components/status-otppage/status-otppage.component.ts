import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailVerifyService } from 'src/app/services/email-verify.service';

@Component({
  selector: 'app-status-otppage',
  templateUrl: './status-otppage.component.html',
  styleUrls: ['./status-otppage.component.css']
})
export class StatusOtppageComponent implements OnInit {

  constructor(public verifyemailservice:EmailVerifyService,private router:Router) { }
  otp='';
  emailid=sessionStorage.getItem('trackemail');
  ngOnInit(): void {
  }
  verifyOtp(){
    this.verifyemailservice.verifyOtp(this.emailid,this.otp).subscribe(data=>{
        console.log(data);
        if(data.result=="success"){
              alert("otp verified!!!! ");
              this.router.navigate(['/dashboard/current-status']);
        }else{
          alert("Invalid Otp");
        }
    });

}
}
