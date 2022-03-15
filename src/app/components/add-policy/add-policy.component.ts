import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import Validation from 'src/app/model/validation';
import { AnalystService } from 'src/app/services/analyst.service';
import { PolicyService } from 'src/app/services/policy.service';


@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})

export class AddPolicyComponent implements OnInit {

  userForm: FormGroup;
  userName : string;
  email : string;
  phone : string;
  password : string;
  confirmPassword : string;
  submitted = false;
 user= new User();

  constructor(private policyService:PolicyService,private router : Router) { }

  ngOnInit(): void {
     this.initForm()
    }

 public  onSubmit() {
   this.submitted=true; 
   console.log("hello")
   console.log(this.userForm.value)
    if (this.userForm.valid){
         this.policyService.addPolicy(this.userForm.value).subscribe(
             data=>{ console.log(data);
                     if(data.result=="failure"){
                             alert(data.message)  ; 
                             this.router.navigate(['/admin-dashboard/add-policy']);
                        }
                      else{
                             alert("policy added Sucessfully")
                             this.router.navigate(['/admin-dashboard/add-policy']);
                      }
             },error=>{
                 console.log(error);
                 alert("error occured /here");
             });
    
   }else{
     console.log("error");
   }
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
