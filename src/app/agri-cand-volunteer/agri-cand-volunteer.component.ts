import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agri-cand-volunteer',
  templateUrl: './agri-cand-volunteer.component.html',
  styleUrls: ['./agri-cand-volunteer.component.css'],
})
export class AgriCandVolunteerComponent implements OnInit {
  constructor(private api: CommonService, private Aroute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getVolunteer();
    this.getcand();
  }

  volunteer: any;
  count: any;
  candId: any;
  clearCand: any = false;
  getVolunteer() {
    let id;
    let role;
    this.Aroute.queryParams.subscribe((e: any) => {
      id = e.id;
      this.candId = id;
      role = e.role;
    });
    this.api.getVolunteerbyIntrest(id, role).subscribe((a: any) => {
      this.volunteer = a.value;
      this.count = a.Counts.length;
    });
  }

  approveSubmit(slotId: any, volunteerId: any, intrestId: any) {
    let data = {
      slotId: slotId,
      volunteerId: volunteerId,
      intrestId: intrestId,
    };
    this.api.adminApprove(data).subscribe((e: any) => {
      console.log('approveSubmit', e);
      this.getVolunteer();
    });
  }

  getUndo(id: any) {
    console.log('getUndo', id);
    this.api.UndoApproval(id).subscribe((e: any) => {
      console.log(e);
      this.getVolunteer();
    });
  }
  candiDates: any = {};
  getcand() {
    this.api.getAgriCandidate(this.candId).subscribe((e: any) => {
      this.candiDates = e;
      console.log(this.candiDates);
      this.clearCand = e.clear ? e.clear : false;
    });
  }

  clear() {
    this.api.clearCand(this.candId).subscribe((e: any) => {
      console.log(e);
    });
  }
}
