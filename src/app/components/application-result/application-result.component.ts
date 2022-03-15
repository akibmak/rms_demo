import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplycreditService } from '../../services/applycredit.service';
import { Response } from 'src/app/model/response';
@Component({
  selector: 'app-application-result',
  templateUrl: './application-result.component.html',
  styleUrls: ['./application-result.component.css']
})
export class ApplicationResultComponent implements OnInit {
 
  constructor(private router: Router,private applyCreditService: ApplycreditService) { }
  Result:Response = new Response();
  ngOnInit(): void {
    this.applyCreditService.applicationResult().subscribe(
      data=>{
           console.log(data);
           this.Result=data;
           
      },error=>{
           alert(error); 
           this.router.navigate(["/"]);
      });
  }
  
}
