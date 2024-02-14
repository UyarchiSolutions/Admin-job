import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tech-rating',
  templateUrl: './tech-rating.component.html',
  styleUrls: ['./tech-rating.component.css']
})
export class TechRatingComponent implements OnInit{
  constructor(private api: CommonService, private route: Router) { }
  ngOnInit(): void {
    this.getCandidates();
  }

  Cand: any = [];
  getCandidates() {
    this.api.getCandidatesDetails(this.filterForms.get('name')?.value, this.filterForms.get('location')?.value).subscribe((e: any) => {
      this.Cand = e;
      console.log(this.Cand);
    });
  }

  CandidateDetailsRoute(id: any) {
    this.route.navigateByUrl('/admin/agri-stream-candidate?id=' + id);
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

  active_Inactive(id: any) {
    this.api.active_inactive(id).subscribe((e: any) => {
      console.log(e)
      this.getCandidates()
    })
  }

  filterForms  = new FormGroup({
    name: new FormControl(''),
    location : new FormControl(''),
    rating: new FormControl('')
  })

  filter(){
    console.log(this.filterForms.value)
    this.getCandidates()
  }
}
