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

const routes: Routes = [
  {path:"sidebar",component:SidebarComponent},
  {path:'',component:ManageCandidateComponent},
  {path:"duplicate-candidate",component:DuplicateCandidateComponent},
  {path:'manage-employer',component:ManageemployerComponent},
  {path:'manage-job',component:ManageJobPostComponent},
{path:"manage-job-applies",component:ManageJobpostAppliesComponent},
{path:'manage-reportedjob',component:ReportedJobpostComponent},
{path:"manage-plan",component:ManagePlanComponent},
{path:"plan-approval",component:PlanapprovalComponent},
{path:"manage-plan-usage",component:ManagePlanUsageComponent},
{path:'manageEnquiry',component:ManageEnquiryComponent},
  {path:'manageFaq',component:ManageFaqComponent},
{path:"employerRegister",component:RegisterComponent},

  {path:'addFaq',component:AddfaqComponent},
  {path:'enqpop',component:EnquiryPopupComponent},
  {path:'enqrew',component:EnquiryPreviewComponent},
  {path:'repenq',component:ReplyEnquiryComponent},
  {path:'addenq',component:AddEnquiryComponent},

  {path:'can-details',component:CanDetailsComponent},
  {path:'employer-detail',component:EmpViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
