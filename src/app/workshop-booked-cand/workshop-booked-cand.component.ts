import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-workshop-booked-cand',
  templateUrl: './workshop-booked-cand.component.html',
  styleUrls: ['./workshop-booked-cand.component.css'],
})
export class WorkshopBookedCandComponent implements OnInit {
  date: any;
  constructor(
    private api: CommonService,
    private Aroute: ActivatedRoute,
    route: Router
  ) {}
  ngOnInit(): void {
    this.Aroute.queryParams.subscribe((e: any) => {
      this.getCandById(e.id);
    });
  }
  data: any;
  getCandById(id: any) {
    this.api.getWorkshopCandById(id).subscribe((e: any) => {
      this.data = e;
    });
  }
  selectedData: any = [];

  selectALL(e: any) {
    console.log(e.target.checked);
    if (e.target.checked) {
      const array = this.data;
      this.selectedData = [...array, ...[]];
      console.log(this.selectedData);
    } else {
      this.selectedData = [];
    }
  }
  selectFun(data: any) {
    let ind = this.selectedData.findIndex((e: any) => {
      return e._id == data._id;
    });
    if (ind == -1) {
      this.selectedData.push(data);
    } else {
      this.selectedData.splice(ind, 1);
    }
  }
  downloadClick() {
    let name = 'WorkshopCandidates'
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
  transform(object: any, selected: any = []): Boolean {
    let id: any = object._id;
    let index = selected.findIndex((a: any) => a._id == id);
    if (index != -1) {
      return true;
    } else {
      return false;
    }
  }
}
