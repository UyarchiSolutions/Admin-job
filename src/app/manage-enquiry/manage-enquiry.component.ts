import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ManageEnquiryService } from '../services/manage-enquiry.service';



@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']

})
export class ManageEnquiryComponent implements OnInit {


  newdata: any = [];
  enqdata: any = [];
  val: boolean = false;
  today = new Date();
  changedDate = '';
  btnds: boolean = false;
  displaycount = 0;
  page = 0;
  pagetotal = 0;
  totalcount = 0;
  ansvalue!: string;
  range =10;
   


  addenqform: any = this.fb.group({
    name: new FormControl(),
    emailId: new FormControl(),
    mobileNumber: new FormControl(),
    enquiry: new FormControl()
  });

  ansform: any = this.fb.group({
    answer: new FormControl()
  });
  value: any;

  constructor(private fb: FormBuilder, private http: HttpClient,
    private service: ManageEnquiryService) { }

  ngOnInit(): void {

  

    this.GetAllEnq();

  }
  OnSubmit() {
    console.log(this.addenqform.value, 'enq is added');
    this.service.addNewEnq(this.addenqform.value).subscribe((res) => {
      this.GetAllEnq();
      this.addenqform.reset();
    })
  }


  GetAllEnq() {

    this.service.getAllEnq(this.range,this.page).subscribe((data: any) => {
      this.newdata = data.data;
       this.displaycount = this.page;
       this.totalcount = data.count;
       this.pagetotal = Math.ceil(data.count / this.range);
    })
  }
  ViewEnq(enq: any, _id: any) {
    this.service.selectedenq = enq;
    this.service.getByIdEnq(_id).subscribe((data: any) => {
      this.enqdata = data;
    })
  }

  Ignore(_id: any) {
    
    this.service.ignoreEnq(_id).subscribe((res: any) => {
      
      this.GetAllEnq();
     
    })
  }
  Replied(_id: any) {
    
   
    this.service.addAnsEnq(this.ansform.value,_id).subscribe((res)=>{
      console.log(res)
      this.GetAllEnq();
      this.StatusUpdated(_id);
    })
  }
  StatusUpdated(_id:any){
    this.service.replyEnq(_id).subscribe((res: any) => {
      
      this.GetAllEnq();
   
    })
  }
  pagination(val: any) {
    if (val == 1) {
      this.page = this.page + 1;
  
      this.GetAllEnq();

    }
    if (val == 0) {
      if (this.page != 0) {
        this.page = this.page - 1;
        console.log(this.page)
        this.GetAllEnq();  
      }
    }
  }
  get_disabled(id:any){
    console.log(id)
     let index = this.newdata.findIndex((a: any) => a._id == id)
     console.log(index)
     if(index!= -1){
      this.value = this.newdata[index].status
      console.log(this.value)
      if(this.value == 'Replied' || this.value == 'Ignored'){
        return true
      }
      else{
        return false
      }
     }
     return false
    }
    Finalreply(id:any){
      var data = {
        enquiryId:id,
        subject:'Reply To Enquiry On :'+ this.enqdata.date +'- Regarding' ,
        answer:this.ansform.get('answer')?.value
      }
      this.service.finalSendEnq(data).subscribe((res)=>{
        console.log(res);

        
      })
      this.service.replyEnq(id).subscribe((res: any) => {
      
        this.GetAllEnq()
    })
}
}