import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ManageFaqServiceService } from '../services/manage-faq-service.service';
import { Faq } from './manage-faq';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-faq',
  templateUrl: './manage-faq.component.html',
  styleUrls: ['./manage-faq.component.css']
})
export class ManageFaqComponent implements OnInit {
  myform!: FormGroup;
  newdata: any = [];
  headdata: any=[];
  displaycount = 0;
  page = 0;
  pagetotal = 0;
  totalcount = 0;
  range =10;
  find:boolean = false;
  qusvalue:any;
  ansvalue:any;
  headvalue:any;
  

  constructor(private fb: FormBuilder, private http: HttpClient,
    private service: ManageFaqServiceService,
    private router: Router) {

  }

  ngOnInit() {
    this.myform = this.fb.group({
      heading: new FormControl(),
      question: new FormControl(),
      answer: new FormControl()
    });
    this.GetAllFaq();
    this.GetFaqforhead();
    
  }
  OnSubmit() {
    if (this.editid == null) {
      this.service.postfaq(this.myform.value).subscribe((res) => {
        console.log(this.myform.value, 'faq is added');
        this.GetAllFaq();
        this.myform.reset();
      })
    }
    else {
      this.service.putfaq(this.myform.value, this.editid).subscribe((res) => {
        console.log(this.myform.value, 'faq is updated');
        this.GetAllFaq();
        this.editid=null;
        this.myform.reset();
      })
    }

  }
  GetAllFaq() {

    this.service.getfaq(this.range,this.page).subscribe((data:any) => {
      this.newdata = data.data;
      this.displaycount = this.page;
       this.totalcount = data.count;
       this.pagetotal = Math.ceil(data.count / this.range);
    })
  }
  Deletefaq(_id: string) {

    this.service.deletefaq(_id).subscribe((res) => {
      this.GetAllFaq();
    })

  }
  editid: any;

  Editfaq(faq: Faq, _id: string) {
    
    this.editid = _id;  
    this.service.selectedFaq = faq;
    this.service.getbyID(faq, faq._id).subscribe((res: any) => {
      this.myform.patchValue({
        heading: res.heading,
        question: res.question,
        answer: res.answer
      })
    })
    
  }
  pagination(val: any) {
    if (val == 1) {
      this.page = this.page + 1;
  
      this.GetAllFaq();

    }
    if (val == 0) {
      if (this.page != 0) {
        this.page = this.page - 1;
        console.log(this.page)
        this.GetAllFaq();  
      }
    }
  }
  exclick(){
    this.find=true;

  }
  addhead(){
    this.find=false;

  }
test(e:any){
  console.log(e.target.value)
}
 GetFaqforhead() {

  this.service.getfaqforheading().subscribe((data:any) => {
    this.headdata = data;
    console.log(this.headdata);

  })
}
}




