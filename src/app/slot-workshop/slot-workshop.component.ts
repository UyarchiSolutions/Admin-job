import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot-workshop',
  templateUrl: './slot-workshop.component.html',
  styleUrls: ['./slot-workshop.component.css'],
})
export class SlotWorkshopComponent implements OnInit {
  constructor(private api: CommonService,private route:Router) {}
  ngOnInit(): void {
    this.getSlots()
  }

  Slots: any;
  getSlots() {
    this.api.getSlotsWorkshop().subscribe((e: any) => {
      this.Slots = e;
    });
  }

  slotRedirect(id:any){
    this.route.navigateByUrl('/admin/workshop-booked-cand?id='+id)
  }

}
