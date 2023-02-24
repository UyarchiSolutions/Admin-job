import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { range } from 'rxjs';
import { Faq } from '../manage-faq/manage-faq';

@Injectable({
  providedIn: 'root'
})
export class ManageFaqServiceService {
  selectedFaq!: Faq;
  faq!: Faq[];

  url='https://livebroadcast.click';
  constructor(private http: HttpClient) { }

  postfaq(faq:Faq){
    return this.http.post(this.url +'/v1/faqe',faq);
  }
  getfaq(rang:any,page:any){
    return this.http.get(this.url+`/v1/faqe/${rang}/${page}`);
  }
  deletefaq(_id:string){

    return this.http.delete(this.url+ '/v1/faqe/get_Faqe_delete' + `/${_id}`);
    
  }
  getbyID(faq:Faq,_id:string){
    return this.http.get(this.url + '/v1/faqe/get_Faqe_id/data'+`/${_id}`);
  }
  putfaq(faq:Faq,id:any){
    return this.http.put(this.url + `/v1/faqe/get_Faqe_update/${id}`,faq);
  }
  getfaqforheading(){
    return this.http.get(this.url +'/v1/faqe/exiting_faqe_data');
  }
   
}
