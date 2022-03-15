import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policies } from 'src/app/model/policies';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-edit-policies',
  templateUrl: './edit-policies.component.html',
  styleUrls: ['./edit-policies.component.css']
})
export class EditPoliciesComponent implements OnInit {
  policies:Policies[];
  p:number=1;
  constructor(private policyService:PolicyService, public router:Router) { }

  ngOnInit(): void {
    this.policyService.getPolicies().subscribe(data=>{
      console.log(data);
      this.policies=data;
    });
  }
  tempPolicyID:any;
  setID(policy: {pid:number; }){
     this. tempPolicyID= policy.pid;
     console.log(this. tempPolicyID);
    this.removePolicy(this.tempPolicyID);
  }

  setUpdateID(policy:{pid:number;}){
    this.tempPolicyID=policy.pid;
    sessionStorage.setItem('policyId',this.tempPolicyID);
    this.router.navigate(["/admin-dashboard/update-policy"]);
  }


  removePolicy(id:any){
    this.policyService.deletePolicy(id).subscribe(data=>{
        console.log(data);
      if(data.result=="success"){
        alert("Policy deleted successfully!!!");
        this.router.navigate(['/admin-dashboard/edit-policies']);
      }else{
        alert("id not found");
        }  
       
    },error=>{
       console.log(error);
       alert("error occured!!");
       this.router.navigate(['/admin-dashboard/edit-policies']);
    })
 }

}