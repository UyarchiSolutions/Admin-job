import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../manage-enquiry/manage-enquiry';

@Injectable({
  providedIn: 'root'
})
export class ManageEnquiryService {
  selectedenq!: Enquiry;
  enq!: Enquiry[];

  url = 'https://livebroadcast.click';

  constructor(private http: HttpClient) { }

  getAllEnq(rang:any,page:any) {
    return this.http.get(this.url + `/v1/faqe/get_all_enquiry/${rang}/${page}`);
  }
  getByIdEnq(_id: any) {
    return this.http.get(this.url + '/v1/faqe/get_id_enquiry/data/' + _id);
  }
  addNewEnq(data: any) {
    return this.http.post(this.url + '/v1/faqe/create_enquiry_dummy', data)
  }
  ignoreEnq(_id: any) {
    return this.http.put(this.url + '/v1/faqe/get_Enquiry_update/' + _id, { status: 'Ignored' })
  }
  replyEnq(_id:any){
    return this.http.put(this.url + '/v1/faqe/get_Enquiry_update/' + _id,{status:'Replied'})
  }
  addAnsEnq(ans:any,_id:any){
    return this.http.put(this.url + '/v1/faqe/get_Enquiry_update/' + _id, ans)
  }
  finalSendEnq(data:any){
    return this.http.post(this.url + `/v1/faqe/reply_enquiry/data`,data)
  }
}
