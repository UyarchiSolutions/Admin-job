import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { ManageFaqComponent } from './manage-faq/manage-faq.component';
import { ManageJobpostAppliesComponent } from './manage-jobpost-applies/manage-jobpost-applies.component';
import { ManageJobpostComponent } from './manage-jobpost/manage-jobpost.component';
import { ManagePlanUsageComponent } from './manage-plan-usage/manage-plan-usage.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { ManageemployerComponent } from './manageemployer/manageemployer.component';
import {AddfaqComponent} from './addfaq/addfaq.component';
import {  HttpClientModule} from '@angular/common/http';
import { EnquiryPopupComponent } from './enquiry-popup/enquiry-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageCandidateComponent,
    ManageEnquiryComponent,
    ManageFaqComponent,
    ManageJobpostComponent,
    ManageJobpostAppliesComponent,
    ManagePlanComponent,
    ManagePlanUsageComponent,
    ManageemployerComponent,
    AddfaqComponent,
    EnquiryPopupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
