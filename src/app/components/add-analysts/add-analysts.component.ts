import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import Validation from 'src/app/model/validation';
import { AdminService } from 'src/app/services/admin.service';
import { AnalystService } from 'src/app/services/analyst.service';

@Component({
  selector: 'app-add-analysts',
  templateUrl: './add-analysts.component.html',
  styleUrls: ['./add-analysts.component.css']
})
export class AddAnalystsComponent implements OnInit {

  userForm: FormGroup;
  userName : string;
  email : string;
  phone : string;
  password : string;
  confirmPassword : string;
  submitted = false;
 user= new User();

  constructor(private registrationService:AnalystService,private router : Router) { }

  ngOnInit(): void {
     this.initForm()
    }

  onSubmit() {
   this.submitted=true; 
   console.log("hello")
   console.log(this.userForm.value)
  if (this.userForm.valid){
    this.registrationService.addAnalyst(this.userForm.value).subscribe(
      data=>{ 
                console.log(data);
               if(data.result=="failure"){
                         alert(data.message)  ; 
                         this.router.navigate(['/admin-dashboard/add-analyst']);
                  }
                else{
                        alert("registered Sucessfully")
                        this.router.navigate(['/admin-dashboard/add-analyst']);
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
      id: new FormControl('', [Validators.required,
      ]),
      userName: new FormControl('', [Validators.required,
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
    },{
      validators:[Validation.match('password','confirmPassword')]
    },
    );
  }
}
