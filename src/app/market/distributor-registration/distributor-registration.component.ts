import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from "@angular/forms";
import { Observable } from 'rxjs';
import { DistributorService } from 'src/app/service/distributor.service';
@Component({
  selector: 'app-distributor-registration',
  templateUrl: './distributor-registration.component.html',
  styleUrls: ['./distributor-registration.component.scss']
})
export class DistributorRegistrationComponent implements OnInit {

  form!: FormGroup;

  datas:any
  

  constructor( private fb: FormBuilder, private distributorService: DistributorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [""]
    });

    this.getDistributor()
  
    
  }

  getDistributor(){
    this.distributorService.subject.subscribe(res=> {this.datas = res, console.log(res)})
    // console.log(this.datas)
  }

  search(){
    this.distributorService.search()
  }

  
  submit() {
    this.distributorService.create(this.form.value)
    this.search()
    // console.log(this.form.value)
  }

}
