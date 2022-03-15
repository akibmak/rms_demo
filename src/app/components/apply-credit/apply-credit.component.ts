import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplycreditService } from '../../services/applycredit.service';
import { Company } from '../../model/company';
import { EmailVerifyService } from '../../services/email-verify.service';
import Validation from '../../model/validation';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-apply-credit',
  templateUrl: './apply-credit.component.html',
  styleUrls: ['./apply-credit.component.css']
})

export class ApplyCreditComponent implements OnInit {
  userForm: FormGroup;
  emailId: string;
  companyId: number;
  companyName: string;
  turnover: number;
  creditvalue: number;
  companyvalue: number;
  loan_amount: number;
  submitted = false;
  company = new Company();
  otp:boolean=false;
  constructor(private Example:ExampleService,private router: Router, private applyCreditService: ApplycreditService, private verifyemailservice: EmailVerifyService) { }

  ngOnInit(): void {
    console.log("form intialiser");
    this.initForm();
  }
  initForm() {
    this.userForm = new FormGroup({
      companyId: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      companyvalue: new FormControl('', [Validators.required]),
      creditvalue: new FormControl('', [Validators.required]),
      turnover: new FormControl('', [Validators.required]),
      loan_amount: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    }
    );
  }
  
  onSubmit(){
    this.submitted=true;
    this.Example.setCompany(this.userForm.value);
    sessionStorage.setItem('companyId',this.userForm.value.companyId);
    sessionStorage.setItem('companyName',this.userForm.value.companyName);
    sessionStorage.setItem('companyvalue',this.userForm.value.companyvalue);
    sessionStorage.setItem('creditvalue',this.userForm.value.creditvalue);
    sessionStorage.setItem('turnover',this.userForm.value.turnover);
    sessionStorage.setItem('loan_amount',this.userForm.value.loan_amount);
    sessionStorage.setItem('emailId',this.userForm.value.emailId);
    if (this.userForm.valid){
      this.emailVerify();
    }
    
  }
//-----------------generating otp---------------------------
  emailVerify() {
    this.verifyemailservice.generateOtp(this.userForm.value).subscribe(data => {
      if(data.result=="success"){
            alert("otp has been sent to your email id!!!!"); 
            this.router.navigate(["/dashboard/optverification"]);  
      }else{
        alert("invalid emailid");
        this.router.navigate(["/"]);
      }
    });
  }

  
}