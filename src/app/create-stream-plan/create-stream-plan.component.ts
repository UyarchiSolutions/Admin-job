import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stream-plan',
  templateUrl: './create-stream-plan.component.html',
  styleUrls: ['./create-stream-plan.component.css'],
})
export class CreateStreamPlanComponent implements OnInit {
  constructor(private api: CommonService, private Route: Router) {}
  ngOnInit(): void {}

  planform = new FormGroup({
    planName: new FormControl('', Validators.required),
    Duration: new FormControl('', Validators.required),
    DurationType: new FormControl('', Validators.required),
    numberOfParticipants: new FormControl('', Validators.required),
    numberofStream: new FormControl('', Validators.required),
    validityofplan: new FormControl('', Validators.required),
    // additionalDuration: new FormControl(''),
    // additionalParticipants: new FormControl(''),
    // DurationIncrementCost: new FormControl(''),
    // noOfParticipantsCost: new FormControl(''),
    chat_Option: new FormControl('', Validators.required),
    // commision: new FormControl('', Validators.required),
    // commition_value: new FormControl(''),
    regularPrice: new FormControl('', Validators.required),
    // salesPrice: new FormControl('', Validators.required),
    // max_post_per_stream: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    planmode: new FormControl('', Validators.required),
    no_of_host: new FormControl('', Validators.required),
    transaction: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required),
    planType: new FormControl('', Validators.required),
    streamvalidity: new FormControl('', Validators.required),
    offer_price: new FormControl('', Validators.required),
    PostCount: new FormControl('1', Validators.required),
    RaiseHands: new FormControl('', Validators.required),
    raisehandcontrol: new FormControl('', Validators.required),
    completedStream: new FormControl('', Validators.required),
    Candidate_Contact_reveal: new FormControl('', Validators.required),
    Pdf: new FormControl(''),
    image: new FormControl(''),
    Teaser: new FormControl('', Validators.required),
    Special_Notification: new FormControl('', Validators.required),
    Service_Charges: new FormControl('', Validators.required),
    limited: new FormControl('', Validators.required),
    // TimeType: new FormControl('', Validators.required),
  });

  raisehandVal: any = null;
  raiseHandControl(e: any) {
    let val = e.target.value;
    this.raisehandVal = val;
    if (val == 'No') {
      this.planform.get('raisehandcontrol')?.setErrors(null);
    }
  }

  usertype: any;
  userChange(e: any) {
    this.usertype = e.target.value;
  }

  limit: any;
  LimitChange(E: any) {
    this.limit = E.target.value;
    if (this.limit == 'Unlimited') {
      this.planform.get('Candidate_Contact_reveal')?.setErrors(null);
    }
  }

  completedStream: any = null;
  completedStreamControl(e: any) {
    let val = e.target.value;
    this.completedStream = val;
    if (val == 'No') {
      this.planform.get('streamvalidity')?.setErrors(null);
      this.planform.get('DurationType')?.setErrors(null);
    }
  }

  submitted: any = false;

  submitPlanForm() {
    this.submitted = true;
    if (this.submitted && this.planform.valid) {
      console.log(this.planform.value);
      this.api.createPlan(this.planform.value).subscribe((e: any) => {
        console.log(e);
        this.Route.navigateByUrl('/manage-stream-plan');
      });
    }
  }
}
