import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-plan-approval',
  templateUrl: './plan-approval.component.html',
  styleUrls: ['./plan-approval.component.css'],
})
export class PlanApprovalComponent implements OnInit {
  constructor(private api: CommonService) {}

  ngOnInit(): void {
    this.getAllPurchasedPlanes();
  }
  data: any;
  getAllPurchasedPlanes() {
    this.api.getPlanesForApproval().subscribe((e: any) => {
      console.log(e);
      this.data = e;
    });
  }

  updatePurchasedPlane(id: any, status: any) {
    let datas = { status: status };
    this.api.updatePurchasedPlan(id, datas).subscribe((e: any) => {
      console.log(id, status);
      this.getAllPurchasedPlanes();
    });
  }
}
