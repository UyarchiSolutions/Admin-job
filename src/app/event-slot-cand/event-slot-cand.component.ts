import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-slot-cand',
  templateUrl: './event-slot-cand.component.html',
  styleUrls: ['./event-slot-cand.component.css'],
})
export class EventSlotCandComponent implements OnInit {
  constructor(
    private api: CommonService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getQueryValues();
    this.getCandidate();
  }

  date: any;
  time: any;
  getQueryValues() {
    this.aroute.queryParams.subscribe((e: any) => {
      this.date = e.date;
      this.time = e.time;
    });
  }

  data: any = [];

  getCandidate() {
    this.api.getCandidate_BySlot(this.date, this.time).subscribe((e: any) => {
      this.data = e;
    });
  }
}
