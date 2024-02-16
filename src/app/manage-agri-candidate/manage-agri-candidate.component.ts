import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-agri-candidate',
  templateUrl: './manage-agri-candidate.component.html',
  styleUrls: ['./manage-agri-candidate.component.css'],
})
export class ManageAgriCandidateComponent implements OnInit {
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

  hrRating(id:any){
    this.route.navigateByUrl('/admin/hr-rating?id='+id);
  }

  techRating(id:any){
    this.route.navigateByUrl('/admin/tech-rating?id='+id);
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
