import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agri-candidate',
  templateUrl: './agri-candidate.component.html',
  styleUrls: ['./agri-candidate.component.css'],
})
export class AgriCandidateComponent implements OnInit {
  constructor(private api: CommonService, private route: Router) { }
  ngOnInit(): void {
    this.getCand();
  }

  cand: any;
  candidate: any;
  getCand() {
    this.api.getAgriCand().subscribe((e: any) => {
      this.cand = e.value;
      console.log(this.cand);
    });
  }

  getCandDetails(cand:any)
  {
    this.api.getAgriCandidate(cand._id).subscribe((e:any)=>{
      this.candidate=e;
      console.log(e, 66666);
    })
  }

  volunteer(id: any, role: any) {
    this.route.navigateByUrl(
      `/admin/agri-cand-volunteer?id=${id}&role=${role}`
    );
  }

  // agri-cand-volunteer-view

  ApprovedVolunteer(id: any) {
    console.log(id);
    this.route.navigateByUrl(`/admin/agri-cand-volunteer-view?id=${id}`);
  }

  chooseId: any;
  copy_success: any = false;
  copy_now_new(id: any) {
    this.copy_success = true;
    this.chooseId = id;
    navigator.clipboard.writeText('https://candidate.erai.cloud/demo/' + id);
    console.log(this.copy_success && id == this.chooseId);
    setTimeout(() => {
      this.copy_success = false;
    }, 1000);
  }

  clear_cand(item: any) {
    this.api.clearCand(item._id, "HR").subscribe((res: any) => {
      // console.log(res);
      item.status = res.status;
      item.clear = res.clear;
      item.hrClear = res.hrClear;
    });
  }

  popup: any = false;
  //singleData: any = {};

  singleView(data: any) {
    //this.singleData = data;
    this.getCandDetails(data);
    this.popup = true;
    //console.log(this.singleData);
  }

  popupClose() {
    this.popup = false;
  }
}
