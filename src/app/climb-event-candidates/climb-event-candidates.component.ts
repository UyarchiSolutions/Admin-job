import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs';

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

  filterForm = new FormGroup({
    key: new FormControl(''),
  });

  data: any = [];

  getAllEvents() {
    this.api
      .getClicmEvent(this.filterForm.get('key')?.value)
      .subscribe((e: any) => {
        console.log(e);
        this.data = e;
      });
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
}
