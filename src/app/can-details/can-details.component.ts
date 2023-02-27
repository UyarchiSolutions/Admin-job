import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-can-details',
  templateUrl: './can-details.component.html',
  styleUrls: ['./can-details.component.css']
})
export class CanDetailsComponent {
  candidate_data: any;
  send_value: any;
  id: any;
  data: any;
  is_new: boolean =false;
  is_old: boolean =false;
  constructor( private commonservice: CommonService,private route: ActivatedRoute, private router: Router,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params['id']); 
      this.id=params['id'];
      // this.jobid=params['job'];
      this.get_candidate_details(this.id)
    }
  );
  // this.getJobpostDetails()
  }
  change_status(id:any,action:boolean){
    var data ={
      active:action
    }
    this.commonservice.update_status_can(id,data).subscribe((res: any) => {
      console.log(res.user);
      // this.get_all()
    });
  }
  get_candidate_details(id:any){
    this.commonservice.get_candidate_id(id).subscribe((res:any)=>{
      this.candidate_data = res[0]
      console.log( this.candidate_data.workStatus);
      // this.folderForm.patchValue({
      //   folderName:this.folderName
      // })
    })
  }
  send(e:any){
    console.log(e.target.value)
     this.send_value = e.target.value;
     if(this.send_value == 'send mail'){
      var data: any ={
        candidates:Array(this.id)
      }
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/sendMail?'+queryString);
     }
     if(this.send_value == 'send job'){
       var data: any ={
        candidates:Array(this.id)
      }
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/sendJob?'+queryString);
     }
   
  }
  // getJobpostDetails(){
  //   this.commonservice.myjobPost().subscribe((res:any)=>{
  //     this.data = res.user
  //     console.log(res.user);
  //   })
  // }
  debar_ca(id:any,status:any){
    var data={
      adminStatus:status
    }
    this.commonservice.update_status_can(id,data).subscribe((res: any) => {
      // this.get_all()
    });
  }

  
}
