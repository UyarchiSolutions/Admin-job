import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { AddfaqComponent } from './addfaq/addfaq.component';
import { EnquiryPopupComponent } from './enquiry-popup/enquiry-popup.component';
import { EnquiryPreviewComponent } from './enquiry-preview/enquiry-preview.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { ManageFaqComponent } from './manage-faq/manage-faq.component';
import { ReplyEnquiryComponent } from './reply-enquiry/reply-enquiry.component';

const routes: Routes = [
  {path:'manageEnquiry',component:ManageEnquiryComponent},
  {path:'manageFaq',component:ManageFaqComponent},
  {path:'addFaq',component:AddfaqComponent},
  {path:'enqpop',component:EnquiryPopupComponent},
  {path:'enqrew',component:EnquiryPreviewComponent},
  {path:'repenq',component:ReplyEnquiryComponent},
  {path:'addenq',component:AddEnquiryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
