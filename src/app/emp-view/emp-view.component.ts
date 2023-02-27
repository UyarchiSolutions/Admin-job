import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent {
  data: any;
  viewproduct: any;
  name: any;
  id: any;

  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,private router: Router,private commonservice: CommonService,) { }
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params['id']); 
      this.id=params['id'];
      // this.jobid=params['job'];
      this.get_candidate_details(this.id)
    }
  );
  }
  get_candidate_details(id:any){
    this.commonservice.get_emp_detail(id).subscribe((res: any) => {
      console.log(res.user);
      this.data = res
    });
  }
  
}
