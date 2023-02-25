import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-manageemployer',
  templateUrl: './manageemployer.component.html',
  styleUrls: ['./manageemployer.component.css']
})
export class ManageemployerComponent implements OnInit {
  range = 20;
  page =0
  empList: any;
  empform:any = this.fb.group({
   
    name:new FormControl(null),
    searchbox:new FormControl(null),
    location:new FormControl(null),
    sortBy:new FormControl(null), 
    skill:new FormControl([]),
    mobilenumber:new FormControl(null),
    range:new FormControl(20),
    page:new FormControl(0)
  })
  constructor( private commonservice: CommonService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.get_all()
  }
  get_all(){
    this.commonservice.get_all_emp(this.range,this.page).subscribe((res: any) => {
      console.log(res.user);
      this.empList = res.data
    });
  }
}
