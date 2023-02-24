import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-reported-jobpost',
  templateUrl: './reported-jobpost.component.html',
  styleUrls: ['./reported-jobpost.component.css']
})
export class ReportedJobpostComponent {
range = 10;
 page =0
  jobList: any;
  jobdetail: any;
  constructor(private formBuilder:FormBuilder,private router: Router,private common_service: CommonService) { }

  ngOnInit(): void {
    this.managejobposts()
  }
  managejobposts(){
    this.common_service.managejobpost(this.range,this.page).subscribe((res:any)=>{
      console.log(res);
      this.jobList = res.data
    })
  }
  deactivate(id:any){
    this.common_service.deactiveJobpost(id).subscribe((res:any)=>{
      console.log(res);
    })
  }
  get_post_detail(id:any){
    this.common_service.get_post_detail(id).subscribe((res:any)=>{
      console.log(res);
      this.jobdetail = res.data
    })
  }
}
