import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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
  getCand() {
    this.api.getAgriCand(this.filter.value).subscribe((e: any) => {
      this.cand = e.value;
      this.next=e.next;
      console.log(this.cand);
    });
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

  filter_status(status: any) {
    this.filter.get('status').setValue(status);
    this.search_now();
  }

  filter: any = new FormGroup({
    status: new FormControl('all'),
    page: new FormControl(0),
    search: new FormControl(),
  })

  page: any = 0;
  next: any = false;

  search_now() {
    this.page = 0;
    this.filter.get('page').setValue(this.page);
    this.getCand();
  }
  pagination(num: any) {

    if (num == 0) {
      this.page--;
    }
    else {
      this.page++;
    }
    this.filter.get('page').setValue(this.page);
    this.getCand();

  }
}
