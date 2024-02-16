import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hr-rating',
  templateUrl: './hr-rating.component.html',
  styleUrls: ['./hr-rating.component.css']
})
export class HrRatingComponent implements OnInit {
  id: any;
  constructor(private api: CommonService, private route: Router, private arouter: ActivatedRoute) { }
  ngOnInit(): void {

    this.arouter.queryParams.subscribe((params: any) => {
      this.id = params['id'];
      this.getHr();
    });
  }

  hr: any = [];
  getHr() {
    this.api.hr_rating(this.id).subscribe((res: any) => {
      this.hr = res;
      console.log(res, 9794857);
    })
  }


  popup: any = false;
  singleData: any = {};

  singleView(data: any) {
    this.singleData = data;
    this.popup = true;
    console.log(this.singleData);
  }

  popupClose() {
    this.popup = false;
  }

  /* active_Inactive(id: any) {
    this.api.active_inactive(id).subscribe((e: any) => {
      console.log(e)
      this.getHr();
    })
  } */

  filterForms = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    rating: new FormControl('')
  })

  filter() {
    console.log(this.filterForms.value)
    this.getHr();
  }

}
