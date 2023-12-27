import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agri-candidate',
  templateUrl: './agri-candidate.component.html',
  styleUrls: ['./agri-candidate.component.css'],
})
export class AgriCandidateComponent implements OnInit {
  constructor(private api: CommonService, private route: Router) {}
  ngOnInit(): void {
    this.getCand();
  }

  cand: any;
  getCand() {
    this.api.getAgriCand().subscribe((e: any) => {
      this.cand = e;
      console.log(this.cand);
    });
  }

  volunteer(id: any, role: any) {
    this.route.navigateByUrl(`/admin/agri-cand-volunteer?id=${id}&role=${role}`);
  }
}
