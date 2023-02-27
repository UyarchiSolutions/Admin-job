import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
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
    location:new FormControl(null),
    sortBy:new FormControl(null), 
    industry:new FormControl(null),
    mobileNumber:new FormControl(null),
    range:new FormControl(20),
    page:new FormControl(0)
  })
  isOpen: boolean=false;
  canName: any;
  latitude: any;
  longtitude: any;
  companyName: any;
  isNo: boolean = false;
  canNumber: any;
  indus_data: any;
  constructor( private commonservice: CommonService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.get_all()
    this.get_industry_list()
  }
  get_all(){
    this.commonservice.get_all_emp(this.empform.value).subscribe((res: any) => {
      console.log(res.user);
      this.empList = res.data
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
  handleAddressChange(address: Address) {
    console.log(address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    let addr = address.formatted_address
    let getadd = addr.split(',')
    this.empform.patchValue({
      location:getadd[0]
    })
   
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  checkCompany(event: any, name: any){
    console.log("xdfgxdfg",name)
    this.empform.get('name')?.setValue(name);
    this.isOpen = false
  }
  get_can_ph(value:any){
    if (value.target.value) {
      this.isNo = true;
    } else {
      this.isNo = false;
    }
    this.commonservice.getempNumber(value.target.value).subscribe((res: any) => {
      this.canNumber = res
    });
  }
  checkNumber(event: any, num: any){
    console.log("xdfgxdfg",num)
    this.empform.get('mobileNumber')?.setValue(num);
    this.isNo = false
  }
  get_industry_list(){
    this.commonservice.get_industry().subscribe((res:any) => {
      console.log(res);
      this.indus_data = res
    })
  }
  change_status(id:any,action:any){
    var data ={
      adminStatus :action
    }
    this.commonservice.update_status_emp(id,data).subscribe((res: any) => {
      console.log(res.user);
      this.get_all()
    });
  }
  debar_ca(id:any,status:any){
    var data={
      adminStatus:status
    }
    this.commonservice.update_status_emp(id,data).subscribe((res: any) => {
      this.get_all()
    });
  }
}
