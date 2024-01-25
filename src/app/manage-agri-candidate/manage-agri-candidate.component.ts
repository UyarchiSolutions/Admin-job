import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-agri-candidate',
  templateUrl: './manage-agri-candidate.component.html',
  styleUrls: ['./manage-agri-candidate.component.css'],
})
export class ManageAgriCandidateComponent implements OnInit {
  constructor(private api: CommonService, private route: Router) {}
  ngOnInit(): void {
    this.getCandidates();
  }

  Cand: any = [];
  getCandidates() {
    this.api.getCandidatesDetails().subscribe((e: any) => {
      this.Cand = e;
      console.log(this.Cand);
    });
  }

  CandidateDetailsRoute(id: any) {
    this.route.navigateByUrl('/admin/agri-stream-candidate?id=' + id);
    // agri-stream-candidate
  }
}
