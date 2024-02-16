import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agri-cand-volunteer',
  templateUrl: './agri-cand-volunteer.component.html',
  styleUrls: ['./agri-cand-volunteer.component.css'],
})
export class AgricandidatestreamComponent implements OnInit {
  constructor(private api: CommonService, private Aroute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getVolunteer();
    this.getcand();
  }

  volunteer: any;
  count: any;
  candId: any;
  clearCand: any = false;
  Role: any;
  getVolunteer() {
    let id;
    let role;
    this.Aroute.queryParams.subscribe((e: any) => {
      id = e.id;
      this.candId = id;
      role = e.role;
      this.Role = e.role;
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
      Role: this.Role,
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
      if (this.Role != 'HR') {
        this.clearCand = e.clear ? e.clear : false;
      } else {
        this.clearCand = e.hrClear ? e.hrClear : false;
      }
    });
  }

  clear() {
    this.api.clearCand(this.candId, this.Role).subscribe((e: any) => {
      this.getcand();
    });
  }
}
