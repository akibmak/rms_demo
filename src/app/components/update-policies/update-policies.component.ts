import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Policies } from 'src/app/model/policies';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-update-policies',
  templateUrl: './update-policies.component.html',
  styleUrls: ['./update-policies.component.css']
})
export class UpdatePoliciesComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  pid:any;
  policy:Policies= new Policies();
  constructor(private policyService:PolicyService,private router : Router) { }
  
  ngOnInit(): void {
    this.initForm();
    this.pid= sessionStorage.getItem('policyId');
    console.log(this.pid);
    this.policyService.getPolicyByID(this.pid).subscribe(data=>{
          this.policy=data;
    });
  }
  onSubmit(){
  this.policyService.updatePolicy(this.userForm.value).subscribe(data=>{
        console.log(data);
        if(data.result=="success"){
          alert("policy updated successfully!!!!!");
          this.router.navigate(["/admin-dashboard/edit-policies"]);
        }else{
          alert("error occured");
          this.router.navigate(["/admin-dashboard/edit-policies"]);
        }
        
  });
  }
  initForm() {
    console.log();
    this.userForm = new FormGroup({
      pid: new FormControl('', [Validators.required]),
      max_loan_amount: new FormControl('', [Validators.required]),
      min_loan_amount: new FormControl('', [Validators.required, Validators.minLength(5)]),
      creditvalue: new FormControl('', [Validators.required]),
      companyvalue: new FormControl('', [Validators.required]),
      turnover: new FormControl('', [Validators.required ])
    }
    );
  }
}
