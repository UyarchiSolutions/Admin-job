import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from './environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseurl = Env.baseAPi;
  constructor(private http: HttpClient) { }


  managejobpost(range:any,page:any){
    return this.http.get(this.baseurl+'/v1/faqe/all_report/'+range+'/'+page)
  }
  deactiveJobpost(id:any){
    return this.http.put(this.baseurl+'/v1/faqe/deactive_admin/'+id,{})
  }
  get_post_detail(id:any){
    return this.http.get(this.baseurl+'/v1/faqe/get_report/data/'+id)
  }
  get_all_jobs(range:any,page:any){
  return this.http.get(this.baseurl+'/v1/employerdetail/get_admin_side_all_post_jobs_details/'+range+'/'+page)
  }
  change_status(id:any,data:any){
    return this.http.put(this.baseurl+'/v1/employerdetail/update_active_deactive/' + id,data)
  }
  view_post(id: any,range:any,page:any){
    console.log(id)
    return this.http.get(this.baseurl + "/v1/employerdetail/getAllApplied_postjobs_Candidates/" + id +'/' + range + '/' + page);
  }
}
