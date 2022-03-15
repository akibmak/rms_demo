import { Injectable } from '@angular/core';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
company :Company =new Company();
  constructor() { }
  getCompany(){
    return this.company;
  }

  setCompany(Company: Company){
          this.company=Company;
  }
}
