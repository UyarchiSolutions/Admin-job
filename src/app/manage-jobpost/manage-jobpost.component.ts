import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-manage-jobpost',
  templateUrl: './manage-jobpost.component.html',
  styleUrls: ['./manage-jobpost.component.css']
})
export class ManageJobpostComponent implements OnInit {
 range = 10;
 page =0
  jobList: any;
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
}
