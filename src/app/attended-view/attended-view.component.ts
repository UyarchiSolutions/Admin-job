import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-attended-view',
  templateUrl: './attended-view.component.html',
  styleUrls: ['./attended-view.component.css'],
})
export class AttendedViewComponent implements OnInit {
  constructor(private api: CommonService, private aroute: ActivatedRoute) {}
  date: any = null;
  time: any = null;
  ngOnInit(): void {
    this.aroute.queryParams.subscribe((e: any) => {
      this.date = e.date;
      this.time = e.time;
    });
    this.getCandidate();
  }

  cand: any = [];
  attended: any = null;
  totlalCount: any = null;
  cand2: any[] = [];
  getCandidate() {
    this.api
      .attendedDetails(
        this.date,
        this.time,
        this.attended,
        this.filterForm.value.key
      )
      .subscribe((e: any) => {
        this.cand = e.values;
        this.cand2 = e.values;
        this.totlalCount = e.registrationCount;
      });
  }

  selectALL(e: any) {
    console.log(e.target.checked);
    if (e.target.checked) {
      const array = this.cand2;
      this.selectedData = [...array, ...[]];
    } else {
      this.selectedData = [];
    }
  }

  filterForm = new FormGroup({
    key: new FormControl(''),
  });

  selectedData: any = [];
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
    let name = `${this.date}&${this.time}`;
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
  transform(object: any, selected: any=[]): Boolean {
    let id: any = object._id;
    let index = selected.findIndex((a: any) => a._id == id);
    if (index != -1) {
      return true;
    } else {
      return false;
    }
  }
}
