import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import Validation from '../../model/validation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  passForm : FormGroup;
 // user : UserDtoextended;
  submitted : boolean;

  constructor(//private pos : PurchaseOrderService,private distributorService : DistributorService,private route : Router
    ) { }

  ngOnInit(): void {
    //console.log(this.pos.getUser());
   // this.user = this.pos.getUser();
    this.initForm();
  }

  initForm() {

    this.passForm = new FormGroup({
      password: new FormControl('', [Validators.required,
                                    Validators.minLength(5),
                                
      ]),
      password2: new FormControl('', [Validators.required],),
    },{
      validators:[Validation.match('password','password2')]
    },
    );    

  }

  onSubmit() {
    

    this.submitted = true;

  //  console.log(this.passForm.value.password);


 // this.user.password = this.passForm.value.password;

 // this.distributorService.resetPassword(this.user).subscribe(data => {
    
    alert("Password Reset Successful");

 //   this.route.navigate(["login"]);

 // }) 

  //console.log(this.user);

  }

}
