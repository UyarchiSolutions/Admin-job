import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-climb-event-candidates',
  templateUrl: './climb-event-candidates.component.html',
  styleUrls: ['./climb-event-candidates.component.css'],
})
export class ClimbEventCandidatesComponent implements OnInit {
  constructor(private api: CommonService) {}
  ngOnInit(): void {
    this.getAllEvents();
  }

  data: any = [];

  getAllEvents() {
    this.api.getClicmEvent().subscribe((e: any) => {
      console.log(e);
      this.data = e;
    });
  }
}
