import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  file: any
  latitude: any;
  longtitude: any;
  selectImg1: any;
  submitted = false
  constructor(private formBuilder: FormBuilder, private router: Router, private aroute: ActivatedRoute, private commonservice: CommonService) {

  }
  RegisterForm: any = this.formBuilder.group({
    logo: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    contactName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    companyType: new FormControl(null, Validators.required),
    pincode: new FormControl('', Validators.required),
    choosefile: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    lat: new FormControl(''),
    long: new FormControl(''),
    registrationType: new FormControl(null, Validators.required),
    industryType: new FormControl(null, Validators.required),
    companyWebsite: new FormControl(''),
    postedBy: new FormControl(null, Validators.required),
    companyDescription: new FormControl('', Validators.required),
    companyAddress: new FormControl('', Validators.required),

  });
  myObject: any
  registereddata = false
  registerType: any
  ngOnInit(): void {

    this.aroute.queryParams.subscribe((res: any) => {
      console.log(res.tab, "iddddddddddddd")
      this.commonservice.employerDetailspatch(res.tab).subscribe((res: any) => {
        console.log(res, "askjdfhkasjfdh");
        if (res) {
          this.registereddata = true
        }

        this.registerType = res.registrationType
        // this.imageSrc= this.baseUrl+res.logo
        // console.log(this.baseUrl+res.choosefile)
        // console.log(res.choosefile)



        this.RegisterForm.patchValue({
          name: res.name,
          email: res.email,
          registrationType: res.registrationType,
          industryType: res.industryType,
          companyType: res.companyType,
          companyWebsite: res.companyWebsite,
          password: res.password,
          contactName: res.contactName,
          mobileNumber: res.mobileNumber,
          companyDescription: res.companyDescription,
          companyAddress: res.companyAddress,
          pincode: res.pincode,
          location: res.location,
          postedBy: res.postedBy,
          logo: res.logo,
          choosefile: res.choosefile


        })
        console.log(this.RegisterForm.value)



      });



    })




    navigator.geolocation.getCurrentPosition((position: any) => {
      this.latitude = position.coords.latitude;
      this.longtitude = position.coords.longitude;
      console.log(this.longtitude, 'this.longtitude');
      console.log(this.latitude, 'this.latitude');
    });
  }




  reg_submit() {
    // if (this.RegisterForm.invalid) {
    //   for (const control of Object.keys(this.RegisterForm.controls)) {
    //     this.RegisterForm.controls[control].markAsTouched();
    //   }
    //   return;
    // }
    console.log(this.RegisterForm.value)
    this.submitted = true;
    if (this.RegisterForm.valid) {
      var jobForm = new FormData();
      jobForm.append('name', this.RegisterForm.get('name')?.value);
      jobForm.append('email', this.RegisterForm.get('email')?.value);
      jobForm.append('password', this.RegisterForm.get('password')?.value);
      jobForm.append('confirm_password', this.RegisterForm.get('confirm_password')?.value);
      jobForm.append('mobileNumber', this.RegisterForm.get('mobileNumber')?.value);
      jobForm.append('contactName', this.RegisterForm.get('contactName')?.value);
      jobForm.append('companyType', this.RegisterForm.get('companyType')?.value);
      jobForm.append('pincode', this.RegisterForm.get('pincode')?.value);
      jobForm.append('choosefile', this.file);
      jobForm.append('lat', this.RegisterForm.get('lat')?.value);
      jobForm.append('long', this.RegisterForm.get('long')?.value);
      jobForm.append('location', this.RegisterForm.get('location')?.value);
      jobForm.append('registrationType', this.RegisterForm.get('registrationType')?.value);
      jobForm.append('industryType', this.RegisterForm.get('industryType')?.value);
      jobForm.append('companyWebsite', this.RegisterForm.get('companyWebsite')?.value);
      jobForm.append('postedBy', this.RegisterForm.get('postedBy')?.value);
      jobForm.append('companyDescription', this.RegisterForm.get('companyDescription')?.value);
      jobForm.append('logo', this.selectImg1)
      jobForm.append('companyAddress', this.RegisterForm.get('companyAddress')?.value);

      // jobForm.append('',this.myAddres)
      console.log(jobForm)

    }



  }

  imageSrc: any
  selectedFile: any
  selectedImg1(event: any): void {
    this.selectedFile = ''
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    };

  }
  removeImg() {
    this.imageSrc = ''
    this.selectedFile = ''
  }

  baseUrl = 'https://livebroadcast.click/'

  addresume(file: any) {
    this.file = null;
    const res = file.target.files[0] as File;
    console.log(res)
    if (res != null) {
      if (
        res.type == 'application/pdf' ||
        res.type == 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      ) {
        this.file = res;
      }
    }
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  handleAddressChange(address: Address) {
    console.log(address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
    this.latitude = address.geometry.location.lat();
    this.latitude = String(this.latitude)
    this.longtitude = address.geometry.location.lng();
    this.longtitude = String(this.longtitude)

    this.RegisterForm.patchValue({
      lat: this.latitude,
      long: this.longtitude,
      location: address.formatted_address
    })
  }
}
