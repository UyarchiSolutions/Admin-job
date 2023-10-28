import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-manage-stream-plan',
  templateUrl: './manage-stream-plan.component.html',
  styleUrls: ['./manage-stream-plan.component.css'],
})
export class ManageStreamPlanComponent implements OnInit {
  constructor(private api: CommonService) {}

  data: any;
  ngOnInit(): void {
    this.getPlanes();
  }

  getPlanes() {
    this.api.getPlanes().subscribe((e: any) => {
      console.log(e);
      this.data = e;
    });
  }
}
