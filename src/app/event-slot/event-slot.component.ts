import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-slot',
  templateUrl: './event-slot.component.html',
  styleUrls: ['./event-slot.component.css'],
})
export class EventSlotComponent implements OnInit {
  constructor(private api: CommonService, private route: Router) {}
  ngOnInit(): void {
    this.getSlots();
  }

  data: any;
  getSlots() {
    this.api.getSlots().subscribe((e: any) => {
      this.data = e;
    });
  }

  candRoute(date: any, time: any) {
    this.route.navigateByUrl(`/event-slot-cand?time=${time}&date=${date}`);
  }
}
