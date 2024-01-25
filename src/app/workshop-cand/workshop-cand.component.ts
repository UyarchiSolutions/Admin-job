import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-workshop-cand',
  templateUrl: './workshop-cand.component.html',
  styleUrls: ['./workshop-cand.component.css'],
})
export class WorkshopCandComponent implements OnInit {
  constructor(private api: CommonService) {}
  ngOnInit(): void {
    this.getCandidates();
  }

  candidates: any = [];
  gender: any = '';
  user: any = '';

  filterForm = new FormGroup({
    gender: new FormControl(null),
    user: new FormControl(null),
    coursetime: new FormControl(null),
  });

  getCandidates() {
    this.api
      .getWorkshopCandidate(
        this.filterForm.get('user')?.value,
        this.filterForm.get('gender')?.value,
        this.filterForm.get('coursetime')?.value
      )
      .subscribe((e: any) => {
        this.candidates = e;
        console.log(this.candidates);
      });
  }

  applyFilter() {
    console.log(this.filterForm.value);
    this.getCandidates();
  }

  clear(){
    this.filterForm.reset()
  }
}
