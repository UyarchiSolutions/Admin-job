import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-event-slot',
  templateUrl: './event-slot.component.html',
  styleUrls: ['./event-slot.component.css'],
})
export class EventSlotComponent implements OnInit {
  constructor(private api: CommonService, private route: Router) {}
  ngOnInit(): void {
    this.getSlots();
  }

  data: any;
  getSlots() {
    this.api.getSlots().subscribe((e: any) => {
      this.data = e;
    });
  }

  candRoute(date: any, time: any) {
    this.route.navigateByUrl(
      `/admin/event-slot-cand?time=${time}&date=${date}`
    );
  }

  datas: any[] = [];
  
  downloadClick(data: any, date: any, time: any) {
    this.datas = data;
    let name = `${date}&${time}`;
    this.downloadExcel(name);
  }

  downloadExcel(name: any): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.datas);
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
  }
}
