import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_ASYNC_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  RegistrationService } from '../../services/registration.service';
import Validation from '../../model/validation';
import { User } from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  companyName : string;
  email : string;
  phone : string;
  password : string;
  companyTurnover:number;
  companyCredit:number;
  confirmPassword : string;
  companyAddress : string;
  role : string;
  submitted = false;
 user= new User();

  constructor(private registrationService: RegistrationService,private router : Router) { }

  ngOnInit(): void {
   // this.role = "Distributor";
     this.initForm()
    }

  onSubmit() {
   this.submitted=true; 
   console.log("hello")
   console.log(this.userForm.value)
  if (this.userForm.valid){
    this.registrationService.registerUser(this.userForm.value).subscribe(
      data=>{ alert("registered Sucessfully")
      console.log(data);
      this.router.navigate(['']);
     },error=>{
              console.log(error);
              alert("error occured");
     });
    
   }else{
     console.log("error");
   }
  }
 initForm() {
    console.log();
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required,
                                  Validators.minLength(3)
      ]),
      password: new FormControl('', [Validators.required,
                                    Validators.minLength(5),
                                
      ]),
      confirmPassword: new FormControl('', [Validators.required],),
      phone: new FormControl('', [Validators.required,
                                Validators.minLength(10),
                                Validators.maxLength(10),
                                Validators.pattern("^[7-9][0-9]{9}$")
                               ]),
      email: new FormControl('', [Validators.required,
                                  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      role: new FormControl('', [Validators.required]),
    },{
      validators:[Validation.match('password','confirmPassword')]
    },
    );
  }
  
}

