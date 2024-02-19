import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slot-creation',
  templateUrl: './slot-creation.component.html',
  styleUrls: ['./slot-creation.component.css']
})
export class SlotCreationComponent implements OnInit{
  slot:any;
  pages:number=0;
  next:boolean=false;
  data:any=[];
  constructor(private http:HttpClient, private api: CommonService){}

  ngOnInit(){
    this.getSlotCreation();
  }

  formGroup:any=new FormGroup({
    date: new FormControl('', Validators.required),
    slot: new FormControl('', Validators.required),
    // sortCount: new FormControl('', Validators.required),
    Type: new FormControl('', Validators.required)
  })

  getSlotCreation(){
    this.api.getSlotCreation(this.pages).subscribe((res:any)=>{
      // console.log(res);
      this.data=res.slots;
      this.next=res.next;
    })
  }

  postSlotCreation(){
    if(this.formGroup.valid)
    {
      this.api.postSlotCreation(this.formGroup.value).subscribe((res:any)=>{
        console.log(res);
      });
      this.popup=false;
      this.ngOnInit();
    }
  }

  pageBack(){
    this.pages--;
    this.getSlotCreation();
  }

  pageNext(){
    this.pages++;
    this.getSlotCreation();
  }


  popup: any = false;

  addslot() {
    this.popup = true;
  }

  popupClose() {
    this.popup = false;
  }

}
