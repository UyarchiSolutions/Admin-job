import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from './environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseurl = Env.baseAPi;
  baseurl2 = Env.baseApi2;
  constructor(private http: HttpClient) {}

  managejobpost(range: any, page: any) {
    return this.http.get(
      this.baseurl + '/v1/faqe/all_report/' + range + '/' + page
    );
  }
  deactiveJobpost(id: any) {
    return this.http.put(this.baseurl + '/v1/faqe/deactive_admin/' + id, {});
  }
  get_post_detail(id: any) {
    return this.http.get(this.baseurl + '/v1/faqe/get_report/data/' + id);
  }
  get_all_jobs(data: any) {
    return this.http.post(
      this.baseurl + '/v1/employerdetail/get_admin_side_all_post_jobs_details',
      data
    );
  }

  change_status(id: any, data: any) {
    return this.http.put(
      this.baseurl + '/v1/employerdetail/update_active_deactive/' + id,
      data
    );
  }
  view_post(id: any, range: any, page: any) {
    console.log(id);
    return this.http.get(
      this.baseurl +
        '/v1/employerdetail/getAllApplied_postjobs_Candidates/' +
        id +
        '/' +
        range +
        '/' +
        page
    );
  }
  get_all_emp(data: any) {
    return this.http.post(
      this.baseurl + '/v1/employerdetail/manage_employer',
      data
    );
  }
  get_all_can(data: any) {
    return this.http.post(
      this.baseurl + '/v1/candidateDetail/get_all_candidates',
      data
    );
  }
  getSkill(value: any) {
    return this.http.get(
      this.baseurl + `/v1/employerdetail/keySkillData/${value}`
    );
  }
  getCanName(value: any) {
    return this.http.get(
      this.baseurl + `/v1/candidateDetail/CandidateRegistration_names/${value}`
    );
  }
  update_status_can(id: any, data: any) {
    return this.http.put(
      this.baseurl +
        '/v1/candidateDetail/updateByIdCandidateRegistration/' +
        id,
      data
    );
  }
  update_status_emp(id: any, data: any) {
    return this.http.put(
      this.baseurl +
        '/v1/employerRegistration/updateByIdEmployerRegistration/' +
        id,
      data
    );
  }
  getNumber(value: any) {
    return this.http.get(
      this.baseurl + `/v1/candidateDetail/CandidateRegistration_number/${value}`
    );
  }
  getCompanyName(value: any) {
    return this.http.get(
      this.baseurl + `/v1/employerdetail/employer_name/${value}`
    );
  }
  getempNumber(value: any) {
    return this.http.get(
      this.baseurl + `/v1/employerdetail/employer_contactnumber/${value}`
    );
  }
  get_industry() {
    return this.http.get(this.baseurl + '/v1/educationDetails/get_Industry');
  }
  get_job_detail(id: any) {
    return this.http.get(
      this.baseurl + '/v1/employerdetail/getByIdEmpDetails/' + id
    );
  }
  get_candidate_id(id: any) {
    console.log('id', id);
    return this.http.get(
      this.baseurl + '/v1/candidateDetail/candidate_detials_id/' + id
    );
  }
  get_emp_detail(id: any) {
    return this.http.get(
      this.baseurl + '/v1/employerdetail/getEmployerRegister/' + id
    );
  }

  delete_emp_jobpost(id: any) {
    return this.http.delete(
      this.baseurl + `/v1/employerdetail/deleteEmpDetails/${id}`
    );
  }
  getallApplies() {
    return this.http.get(
      this.baseurl + '/v1/employerdetail/get_admin_side_all_post_jobs_details'
    );
  }

  employerDetailspatch(id: any) {
    return this.http.get(
      this.baseurl + `/v1/employerRegistration/getEmployerById/${id}`
    );
  }

  createPlan(data: any) {
    return this.http.post(this.baseurl + '/v1/plan', data);
  }

  getPlanes() {
    return this.http.get(this.baseurl + '/v1/plan/all');
  }

  getPlanesForApproval() {
    return this.http.get(this.baseurl + '/v1/plan/getPurchasedPlan/Admin');
  }

  updatePurchasedPlan(id: any, data: any) {
    return this.http.put(
      this.baseurl + '/v1/plan/update/Purchased/Planes/' + id,
      data
    );
  }

  getClicmEvent(key: any) {
    return this.http.get(
      this.baseurl + `/v1/climbevent/getAllRegistered/Candidate?key=${key}`
    );
  }

  getSlots() {
    return this.http.get(
      this.baseurl + '/v1/climbevent/getSlotDetails/WithCandidate'
    );
  }

  getCandidate_BySlot(date: any, time: any) {
    return this.http.get(
      this.baseurl + `/v1/climbevent/getCandidateBySlot/${date}/${time}`
    );
  }

  adminLogin(data: any) {
    return this.http.post(this.baseurl + '/v1/auth/login', data);
  }

  getTotalSlots(key: any) {
    return this.http.get(this.baseurl2 + '/v1/climb/slots/details?key=' + key);
  }

  attendedDetails(date: any, time: any, attended: any, key: any) {
    return this.http.get(
      this.baseurl2 +
        `/v1/climb/getCandidateBySlot/${date}/${time}/${attended}?key=${key}`
    );
  }

  getTestUsers(key: any, action: any) {
    return this.http.get(
      this.baseurl + `/v1/climbevent/getTestUsers?key=${key}&action=${action}`
    );
  }
  getTestUsersNew(key: any, action: any) {
    return this.http.get(
      this.baseurl +
        `/v1/climbevent/getTestUsers/New?key=${key}&action=${action}`
    );
  }

  updateTestUsers(id: any, data: any) {
    return this.http.put(
      this.baseurl + '/v1/climbevent/update/Status/' + id,
      data
    );
  }

  uploadAndGetDatas(data: any) {
    return this.http.post(this.baseurl + '/v1/agriEvent/ExcelDatas', data);
  }

  getAgriCand() {
    return this.http.get(this.baseurl + '/v1/agriEvent/agri/cand');
  }
  // getIntrested/ByCand_Role/:id/:role

  getVolunteerbyIntrest(id: any, role: any) {
    return this.http.get(
      this.baseurl + `/v1/agriEvent/getIntrested/ByCand_Role/${id}/${role}`
    );
  }

  adminApprove(data: any) {
    return this.http.post(this.baseurl + '/v1/agriEvent/AdminApprove', data);
  }

  UndoApproval(id: any) {
    return this.http.get(this.baseurl + '/v1/agriEvent/Undo/' + id);
  }

  getAgriCandidate(id: any) {
    return this.http.get(this.baseurl + '/v1/agriEvent/getCandidate/' + id);
  }
  clearCand(id: any, role: any) {
    return this.http.get(
      this.baseurl + `/v1/agriEvent/clearCandidates/${id}/${role}`
    );
  }
  getWorkshopCandidate(user: any, gender: any,coursetime:any) {
    return this.http.get(this.baseurl + `/v1/climbevent/getWorkShopCand?user=${user}&gender=${gender}&coursetime=${coursetime}`)
  }
  getSlotsWorkshop(){
    return this.http.get(this.baseurl + `/v1/climbevent/getInternSlots`)
  }
  getWorkshopCandById(id:any){
    return this.http.get(this.baseurl + `/v1/climbevent/getWorkshop/Slot/${id}`)
  }
  getCandidatesDetails(){
    return this.http.get(this.baseurl + "/v1/agriEvent/getCandidatesReport")
  }
  getStreamsByCand(id:any){
    return this.http.get(this.baseurl +'/v1/agriEvent/getStreamDetailsByCand/'+id)
  }
  loader:any = false
}
