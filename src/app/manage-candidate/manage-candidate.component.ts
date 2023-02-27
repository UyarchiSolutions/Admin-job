import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { __values } from 'tslib';
import { CommonService } from '../common.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-manage-candidate',
  templateUrl: './manage-candidate.component.html',
  styleUrls: ['./manage-candidate.component.css']
})
export class ManageCandidateComponent implements OnInit {
  canList: any;
  range = 20;
  page =0;
  searchval: any='value';
    canform:any = this.fb.group({
   
    date1:new FormControl(null),
    date2:new FormControl(null),
    name:new FormControl(null),
    searchbox:new FormControl(null),
    location:new FormControl(null),
    sortBy:new FormControl(null), 
    skill:new FormControl([]),
    mobilenumber:new FormControl(null),
    range:new FormControl(20),
    page:new FormControl(0)
  })
  latitude: any;
  longtitude: any;
  isDisplay: boolean=false;
  keySkill: any;
  canName: any;
  isOpen: boolean=false;
  isNo: boolean = false;
  canNumber: any;
  colorTheme = "theme-default"
  bsConfig: Partial<BsDatepickerConfig>;
  constructor( private commonservice: CommonService,
    private fb: FormBuilder,
    private router: Router) { 
      this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, useUtc: true });
    }

  ngOnInit(): void {
    this.get_all()
  }
  get_all(){
    this.commonservice.get_all_can(this.canform.value).subscribe((res: any) => {
      console.log(res.user);
      this.canList = res.data
    });
  }
  get_location(location:any){
    let loc = location.split(',')
    return loc[0]
  }
  handleAddressChange(address: Address) {
    console.log(address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    let addr = address.formatted_address
    let getadd = addr.split(',')
    this.canform.patchValue({
      location:getadd[0]
    })
   
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  change_status(id:any,action:boolean){
    var data ={
      active:action
    }
    this.commonservice.update_status_can(id,data).subscribe((res: any) => {
      console.log(res.user);
      this.get_all()
    });
  }
  debar_ca(id:any,status:any){
    var data={
      adminStatus:status
    }
    this.commonservice.update_status_can(id,data).subscribe((res: any) => {
      this.get_all()
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

    this.canform.get('skill')?.setValue(value);
    console.log('fgvfdg', this.canform.get('skill')?.value);
  }
  getKeyskills(value: any) {
    this.commonservice.getSkill(value).subscribe((res: any) => {
      this.keySkill = res;
      console.log(this.keySkill);
    });
  }
  checkSkill(event: any, skill: any) {
    console.log('checkSkill', skill);
    let index: any = this.canform.get('skill')?.value;
    console.log(index);
    console.log(this.canform.get('skill')?.value);
    if (index.length != 0) {
      let value = index.splice([index.length - 1], 1);
      index.push(skill);
      this.canform.get('skill')?.setValue(index);
      console.log(this.canform.get('skill')?.value);
      let search: any = index.toString() + ',';
      this.canform.get('searchbox')?.setValue(search);
      this.isDisplay = false;
    }
  }
  get_can_name(value:any){
    if (value.target.value) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
    this.commonservice.getCanName(value.target.value).subscribe((res: any) => {
      this.canName = res
      console.log(this.keySkill);
    });
  }
  checkName(event: any, name: any){
    console.log("xdfgxdfg",name)
    this.canform.get('name')?.setValue(name);
    this.isOpen = false
  }
  get_can_ph(value:any){
    if (value.target.value) {
      this.isNo = true;
    } else {
      this.isNo = false;
    }
    this.commonservice.getNumber(value.target.value).subscribe((res: any) => {
      this.canNumber = res
    });
  }
  checkNumber(event: any, num: any){
    console.log("xdfgxdfg",num)
    this.canform.get('mobilenumber')?.setValue(num);
    this.isNo = false
  }
  getbyvalue(e:any){
    this.searchval = e.target.value
 }
}
