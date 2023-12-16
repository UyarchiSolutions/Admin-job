import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-test-new-users',
  templateUrl: './test-new-users.component.html',
  styleUrls: ['./test-new-users.component.css'],
})
export class TestNewUsersComponent implements OnInit {
  constructor(private api: CommonService) {}
  ngOnInit(): void {
    this.getTestUsers();
  }
  totalRegistered: any = 0;
  users: any = [];
  cand2: any;
  len: any = 0;
  getTestUsers() {
    this.api
      .getTestUsers(this.filterForm.value.key, this.filterForm.value.action)
      .subscribe((e: any) => {
        this.users = e.values;
        this.cand2 = e.values;
        this.len = e.values.length;

        this.totalRegistered = e.count;
      });
  }

  updateTestUsers(id: any, status: any) {
    let data = { status: status };
    this.api.updateTestUsers(id, data).subscribe((e: any) => {
      this.getTestUsers();
    });
  }

  selectdName: any = 'Pending';
  changeStatus(e: any) {
    this.selectdName = e.target.value;
    this.filterForm.get('action')?.setValue(e.target.value);
    this.getTestUsers();
  }

  filterForm = new FormGroup({
    key: new FormControl(''),
    action: new FormControl(''),
  });

  getAllEvents() {
    this.getTestUsers();
  }

  popup: any = false;
  singleData: any = {};

  singleView(data: any) {
    this.singleData = data;
    this.popup = true;
    console.log(this.singleData);
  }

  popupClose() {
    this.popup = false;
  }
  selectedData: any = [];
  selectALL(e: any) {
    console.log(e.target.checked);
    if (e.target.checked) {
      const array = this.cand2;
      this.selectedData = [...array, ...[]];
    } else {
      this.selectedData = [];
    }
  }
  selectFun(data: any) {
    let ind = this.selectedData.findIndex((e: any) => {
      return e._id == data._id;
    });
    console.log(ind);

    if (ind == -1) {
      this.selectedData.push(data);
    } else {
      this.selectedData.splice(ind, 1);
    }
    console.log(this.selectedData);
  }
  isChecked(val: any) {
    let ind = this.selectedData.findIndex((e: any) => {
      return val._id == e._id;
    });
    if (ind >= 0) {
      return true;
    } else {
      return false;
    }
  }

  downloadClick() {
    let name = this.selectdName;
    this.downloadExcel(name);
  }

  downloadExcel(name: any): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.selectedData
    );
    const workbook: XLSX.WorkBook = {
      Sheets: { datas: worksheet },
      SheetNames: ['datas'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, name);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    });
    const downloadLink: HTMLAnchorElement = document.createElement('a');
    const url: string = window.URL.createObjectURL(data);
    downloadLink.href = url;
    downloadLink.download = `${fileName}.xlsx`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    this.selectedData = [];
  }
}

@Pipe({
  name: 'ischecked',
})
export class Ischeckedpipe implements PipeTransform {
  transform(object: any, selected: any): Boolean {
    let id: any = object._id;
    let index = selected.findIndex((a: any) => a._id == id);
    if (index != -1) {
      return true;
    } else {
      return false;
    }
  }
}
