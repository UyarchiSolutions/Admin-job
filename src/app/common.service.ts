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
}
