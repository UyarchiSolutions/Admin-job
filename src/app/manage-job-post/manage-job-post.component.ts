import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
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
  isOpen =false
  from: any;
  from1: any;
  to: any;
  to1: any;
  jobpostform:any = this.fb.group({
    name:new FormControl(null),
    location:new FormControl(null),
    sortBy:new FormControl(null),
    skill:new FormControl([]),
    searchbox:new FormControl(null),
    date1:new FormControl(null),
    date2:new FormControl(null),
    salary: new FormControl(null),
    range:new FormControl(20),
    page:new FormControl(0)
  })
  isDisplay: boolean =false;
  keySkill: any;
  latitude: any;
  longtitude: any;
  searchval: any='value';
  companyName: any;
  jobdetail: any;
constructor(  private commonservice: CommonService,
  private fb: FormBuilder,
  private router: Router){
  }
  ngOnInit(): void {
      this.get_all()
  }
  get_all(){
    this.commonservice.get_all_jobs(this.jobpostform.value).subscribe((res: any) => {
      console.log(res.user);
      this.jobList = res.data
    });
  }
  get_all_sort(e:any){
    
    this.commonservice.get_all_jobs(this.jobpostform.value).subscribe((res: any) => {
      console.log(res.user);
      this.jobList = res.data
    });

  }
  get_campany_name(value:any){
    if (value.target.value) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
    this.commonservice.getCompanyName(value.target.value).subscribe((res: any) => {
      this.companyName = res
    });
  }
  checkCompany(event: any, name: any){
    console.log("xdfgxdfg",name)
    this.jobpostform.get('name')?.setValue(name);
    this.isOpen = false
  }
  change_status(id: any,activebtn:boolean) {
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
  dispalye(data: any) {
    console.log('lusu');
    let value = data.target.value.split(',');
    if (data.target.value) {
      this.isDisplay = true;
    } else {
      this.isDisplay = false;
    }
    if (value.length != 0) {
      if (value[value.length - 1] != null && value[value.length - 1] != '') {
        this.getKeyskills(value[value.length - 1]);
      }
    }
    console.log(value);

    this.jobpostform.get('skill')?.setValue(value);
    console.log('fgvfdg', this.jobpostform.get('search')?.value);
  }
  getKeyskills(value: any) {
    this.commonservice.getSkill(value).subscribe((res: any) => {
      this.keySkill = res;
      console.log(this.keySkill);
    });
  }
  checkSkill(event: any, skill: any) {
    console.log('checkSkill', skill);
    let index: any = this.jobpostform.get('skill')?.value;
    console.log(index);
    console.log(this.jobpostform.get('skill')?.value);
    if (index.length != 0) {
      let value = index.splice([index.length - 1], 1);
      index.push(skill);
      this.jobpostform.get('skill')?.setValue(index);
      console.log(this.jobpostform.get('skill')?.value);
      let search: any = index.toString() + ',';
      this.jobpostform.get('searchbox')?.setValue(search);
      this.isDisplay = false;
    }
  }
  handleAddressChange(address: Address) {
    console.log(address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    let addr = address.formatted_address
    let getadd = addr.split(',')
    this.jobpostform.patchValue({
      location:getadd[0]
    })
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  getbyvalue(e:any){
     this.searchval = e.target.value
  }
  deactivate(id:any){
    this.commonservice.deactiveJobpost(id).subscribe((res:any)=>{
      console.log(res);
    })
  }
  changeSalary(from:any, to:any){
    let num1 = from /100000
    let num2 = to /100000
    return num1 + ' to ' + num2 + ' lacs'
  }
  job_details(id:any) {
    this.commonservice.get_job_detail(id).subscribe((res:any)=>{
      console.log(res)
      this.jobdetail = res.user[0]
      this.from = this.jobdetail.salaryRangeFrom
      console.log(this.from)
      this.from1 = this.from / 100000
      this.to = this.jobdetail.salaryRangeTo
      this.to1 = this.to / 100000
    })
  }
}
