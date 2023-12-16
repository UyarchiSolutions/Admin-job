import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-attended',
  templateUrl: './attended.component.html',
  styleUrls: ['./attended.component.css'],
})
export class AttendedComponent implements OnInit {
  constructor(private api: CommonService, private route: Router) {}
  ngOnInit(): void {
    this.getSlots();
  }

  slots: any = [];

  getSlots() {
    this.api.getTotalSlots(this.filterForm.value.key).subscribe((e: any) => {
      console.log(e);
      this.slots = e;
    });
  }

  viewClick(date:any,time:any) {
    // event-attended-view
    this.route.navigateByUrl(`/admin/event-attended-view?date=${date}&time=${time}`);
  }

  filterForm = new FormGroup({
    key: new FormControl(''),
  });

}
