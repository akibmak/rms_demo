import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailVerifyService } from 'src/app/services/email-verify.service';
import { TrackstatusService } from 'src/app/services/trackstatus.service';

@Component({
  selector: 'app-trackstatus',
  templateUrl: './trackstatus.component.html',
  styleUrls: ['./trackstatus.component.css']
})
export class TrackstatusComponent implements OnInit {
  constructor(public verifyemailservice:EmailVerifyService,public router:Router,public tarckstatus:TrackstatusService) { }
  userForm: FormGroup;
  emailid='';
  ngOnInit(): void {
    this.initform();
  }
  
  initform(){
    this.userForm= new FormGroup({
      emailid: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    });
  }
  emailVerify() {
      if(this.userForm.valid){
        console.log(this.userForm.value);
        sessionStorage.setItem('trackemail',this.userForm.value.emailid);
        this.verifyemailservice.generateOtp(this.userForm.value).subscribe(data => {
          console.log(data);
          if(data.result=="success"){
                alert("otp has been sent to your email id!!!!"); 
                this.router.navigate(["/dashboard/status-otpverification"]);  
          }else{
            alert("invalid emailid");
            this.router.navigate(["/"]);
          }
        });
      }
  }

  checkEmailPresent(){
        this.tarckstatus.findByEmail(this.userForm.value.emailid).subscribe(
          data=>{
              console.log(data);
             if(data==false){
                 alert("Unknown email id!!");
                 this.router.navigate(["/"]);  
              }else{
                  this.emailVerify();
               }
            }
        );
  }
    
}
