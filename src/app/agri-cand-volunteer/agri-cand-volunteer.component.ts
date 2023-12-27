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
  }

  volunteer: any;
  getVolunteer() {
    let id;
    let role;
    this.Aroute.queryParams.subscribe((e: any) => {
      id = e.id;
      role = e.role;
    });
    this.api.getVolunteerbyIntrest(id, role).subscribe((a: any) => {
      this.volunteer = a;
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
    });
  }
}
