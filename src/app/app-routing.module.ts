import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { AddfaqComponent } from './addfaq/addfaq.component';
import { CanDetailsComponent } from './can-details/can-details.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EnquiryPopupComponent } from './enquiry-popup/enquiry-popup.component';
import { EnquiryPreviewComponent } from './enquiry-preview/enquiry-preview.component';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { ManageFaqComponent } from './manage-faq/manage-faq.component';
import { ManageJobPostComponent } from './manage-job-post/manage-job-post.component';
import { ManageemployerComponent } from './manageemployer/manageemployer.component';
import { ReplyEnquiryComponent } from './reply-enquiry/reply-enquiry.component';
import { ReportedJobpostComponent } from './reported-jobpost/reported-jobpost.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageJobpostAppliesComponent } from './manage-jobpost-applies/manage-jobpost-applies.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { PlanapprovalComponent } from './planapproval/planapproval.component';
import { ManagePlanUsageComponent } from './manage-plan-usage/manage-plan-usage.component';
import { DuplicateCandidateComponent } from './duplicate-candidate/duplicate-candidate.component';
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
import { AttendedViewComponent } from './attended-view/attended-view.component';
import { TestNewUsersComponent } from './test-new-users/test-new-users.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { AgriCandidateComponent } from './agri-candidate/agri-candidate.component';
import { NewTestCandComponent } from './new-test-cand/new-test-cand.component';
import { AgriCandVolunteerComponent } from './agri-cand-volunteer/agri-cand-volunteer.component';
import { AgriCandVolunteerViewComponent } from './agri-cand-volunteer-view/agri-cand-volunteer-view.component';
import { WorkshopCandComponent } from './workshop-cand/workshop-cand.component';
import { SlotWorkshopComponent } from './slot-workshop/slot-workshop.component';
import { WorkshopBookedCandComponent } from './workshop-booked-cand/workshop-booked-cand.component';
import { ManageAgriCandidateComponent } from './manage-agri-candidate/manage-agri-candidate.component';
import { StreamCandidatesComponent } from './stream-candidates/stream-candidates.component';
import { HrRatingComponent } from './hr-rating/hr-rating.component';
import { TechRatingComponent } from './tech-rating/tech-rating.component';
import { AgricandidatestreamComponent } from './agri-candidate-stream-view/agri-cand-volunteer.component';
import { SlotCreationComponent } from './slot-creation/slot-creation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: 'sidebar', component: SidebarComponent },
      { path: 'home', component: ManageCandidateComponent },
      { path: 'duplicate-candidate', component: DuplicateCandidateComponent },
      { path: 'manage-employer', component: ManageemployerComponent },
      { path: 'manage-job', component: ManageJobPostComponent },
      { path: 'manage-job-applies', component: ManageJobpostAppliesComponent },
      { path: 'manage-reportedjob', component: ReportedJobpostComponent },
      { path: 'manage-plan', component: ManagePlanComponent },
      { path: 'plan-approval', component: PlanapprovalComponent },
      { path: 'manage-plan-usage', component: ManagePlanUsageComponent },
      { path: 'manageEnquiry', component: ManageEnquiryComponent },
      { path: 'manageFaq', component: ManageFaqComponent },
      { path: 'employerRegister', component: RegisterComponent },

      { path: 'addFaq', component: AddfaqComponent },
      { path: 'enqpop', component: EnquiryPopupComponent },
      { path: 'enqrew', component: EnquiryPreviewComponent },
      { path: 'repenq', component: ReplyEnquiryComponent },
      { path: 'addenq', component: AddEnquiryComponent },

      { path: 'can-details', component: CanDetailsComponent },
      { path: 'employer-detail', component: EmpViewComponent },
      { path: 'manage-stream-plan', component: ManageStreamPlanComponent },
      { path: 'stream-plan', component: CreateStreamPlanComponent },
      { path: 'stream-plan-approval', component: PlanApprovalComponent },
      {
        path: 'climb-event-candidate',
        component: ClimbEventCandidatesComponent,
      },
      { path: 'event-slot', component: EventSlotComponent },
      { path: 'event-slot-cand', component: EventSlotCandComponent },
      { path: 'event-attended', component: AttendedComponent },
      { path: 'event-attended-view', component: AttendedViewComponent },
      { path: 'test-users', component: TestNewUsersComponent },
      { path: 'file-download', component: FileDownloadComponent },
      { path: 'new-test-cand', component: NewTestCandComponent },
      { path: 'agri-cand', component: AgriCandidateComponent },
      { path: 'agri-cand-volunteer', component: AgriCandVolunteerComponent },
      { path: 'agri-volunteer-view', component: AgricandidatestreamComponent },
      { path: 'agri-cand-volunteer-view', component: AgriCandVolunteerViewComponent },
      { path: 'workshop-cand', component: WorkshopCandComponent },
      { path: 'slot-workshop', component: SlotWorkshopComponent },
      { path: 'workshop-booked-cand', component: WorkshopBookedCandComponent },
      { path: 'manage-agri-cand', component: ManageAgriCandidateComponent },
      { path: 'agri-stream-candidate', component: StreamCandidatesComponent },
      { path: 'hr-rating', component: HrRatingComponent },
      { path: 'tech-rating', component: TechRatingComponent },
      { path: 'slot-creation', component: SlotCreationComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
