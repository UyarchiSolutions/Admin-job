import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { ManageFaqComponent } from './manage-faq/manage-faq.component';
import { ManageJobpostAppliesComponent } from './manage-jobpost-applies/manage-jobpost-applies.component';
import { ManagePlanUsageComponent } from './manage-plan-usage/manage-plan-usage.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { ManageemployerComponent } from './manageemployer/manageemployer.component';
import { AddfaqComponent } from './addfaq/addfaq.component';
import { HttpClientModule } from '@angular/common/http';
import { EnquiryPopupComponent } from './enquiry-popup/enquiry-popup.component';
import { ManageJobPostComponent } from './manage-job-post/manage-job-post.component';
import { ReportedJobpostComponent } from './reported-jobpost/reported-jobpost.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CanDetailsComponent } from './can-details/can-details.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DuplicateCandidateComponent } from './duplicate-candidate/duplicate-candidate.component';
import { PlanapprovalComponent } from './planapproval/planapproval.component';
import { RegisterComponent } from './register/register.component';
import { ManageStreamPlanComponent } from './manage-stream-plan/manage-stream-plan.component';
import { CreateStreamPlanComponent } from './create-stream-plan/create-stream-plan.component';
import { PlanApprovalComponent } from './plan-approval/plan-approval.component';
import { ClimbEventCandidatesComponent } from './climb-event-candidates/climb-event-candidates.component';
import { EventSlotComponent } from './event-slot/event-slot.component';
import { EventSlotCandComponent } from './event-slot-cand/event-slot-cand.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendedComponent } from './attended/attended.component';
import { AttendedViewComponent, Ischeckedpipe } from './attended-view/attended-view.component';
import { TestNewUsersComponent } from './test-new-users/test-new-users.component';
import { CommonModule } from '@angular/common';
import { FileDownloadComponent } from './file-download/file-download.component';
import { AgriCandidateComponent } from './agri-candidate/agri-candidate.component';
import { NewTestCandComponent } from './new-test-cand/new-test-cand.component';
import { AgriCandVolunteerComponent } from './agri-cand-volunteer/agri-cand-volunteer.component';
import { AgriCandVolunteerViewComponent } from './agri-cand-volunteer-view/agri-cand-volunteer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCandidateComponent,
    ManageEnquiryComponent,
    ManageFaqComponent,
    RegisterComponent,
    ManageJobpostAppliesComponent,
    ManagePlanComponent,
    ManagePlanUsageComponent,
    ManageemployerComponent,
    AddfaqComponent,
    EnquiryPopupComponent,
    ManageJobPostComponent,
    ReportedJobpostComponent,
    CanDetailsComponent,
    EmpViewComponent,
    SidebarComponent,
    DuplicateCandidateComponent,
    PlanapprovalComponent,
    ManagePlanComponent,
    ManageStreamPlanComponent,
    CreateStreamPlanComponent,
    PlanApprovalComponent,
    ClimbEventCandidatesComponent,
    EventSlotComponent,
    EventSlotCandComponent,
    LoginComponent,
    DashboardComponent,
    AttendedComponent,
    AttendedViewComponent,
    TestNewUsersComponent,
    Ischeckedpipe,
    FileDownloadComponent,
    AgriCandidateComponent,
    NewTestCandComponent,
    AgriCandVolunteerComponent,
    AgriCandVolunteerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GooglePlaceModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
