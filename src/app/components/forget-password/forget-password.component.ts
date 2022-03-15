import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm : FormGroup;
  userName : string;
  userId : string;
  newpassword : string;
  submitted : boolean;

  constructor(public router:Router, private forgetPasswordService: ForgetpasswordService ) { }
  
  ngOnInit(): void {
    this.initForm()
  }

  
 initForm() {
  console.log();
  this.forgetForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userId: new FormControl('', [Validators.required]),
    newpassword: new FormControl('', [Validators.required,Validators.minLength(5)])
  }
  );
}

onSubmit() {
 this.submitted = true;  
 if(this.forgetForm.valid){
     this.forgetPasswordService.forgetpassword(this.userName,this.userId,this.newpassword).subscribe(data=>{
         console.log(data);
         alert("ypur password has been changed successfully!!!!!");
         this.router.navigate(['/']);
     },error=>{
       alert(error);
     });
 }
}

}
