import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-manage-job-post',
  templateUrl: './manage-job-post.component.html',
  styleUrls: ['./manage-job-post.component.css']
})
export class ManageJobPostComponent implements OnInit {
  range = 20;
  page =0
  jobList: any;
  active:any;
  Tab = 1;
  applied_data: any;
constructor(  private commonservice: CommonService,
  private fb: FormBuilder,
  private router: Router){
  }
  ngOnInit(): void {
      this.get_all()
  }
  get_all(){
    this.commonservice.get_all_jobs(this.range,this.page).subscribe((res: any) => {
      console.log(res.user);
      this.jobList = res.data
    });
  }
  change_status(id: any,activebtn:any) {
    var data={
      active : activebtn
    }
    this.commonservice.change_status(id,data) .subscribe((res: any) => {
        console.log(res);
        this.get_all()
      });
  }
  change_status_active(id: any,activebtn:any) {
    var data={
      active : activebtn
    }
    this.commonservice.change_status(id,data) .subscribe((res: any) => {
        console.log(res);
        this.get_all()
      });
  }
  get_applied_can(id:any){
    this.Tab = 2

    this.commonservice.view_post(id, this.range, this.page).subscribe((res: any) => {
      this.applied_data = res.data;
      console.log(this.applied_data);
    });
  }
}
