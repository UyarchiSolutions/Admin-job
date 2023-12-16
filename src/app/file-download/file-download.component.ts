import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css'],
})
export class FileDownloadComponent implements OnInit {
  constructor(private api: CommonService) {}
  ngOnInit(): void {}

  file: any = null;
  fileName: any = null;
  fileUpload(e: any) {
    console.log('fileUpload', e.target.files);
    this.file = e.target.files[0];
    this.fileName = e.target.files[0].name;
    console.log(this.fileName);
  }
  removeFile() {
    this.file = null;
    this.fileName = null;
  }

  matchedData: any = [];
  UnMatchedData: any = [];
  load: any = false;
  getDatas() {
    let formData = new FormData();
    formData.append('file', this.file);
    this.load = true;
    this.api.uploadAndGetDatas(formData).subscribe((e: any) => {
      this.matchedData = e.MatchedDatas;
      this.UnMatchedData = e.UnMatchedDatas;
      this.load = false;
    });
  }

  downloadClickMatched() {
    let name = 'MatchedDatas';
    this.downloadExcelMatched(name);
  }

  downloadClickUnMatched() {
    let name = ' Un MatchedDatas';
    this.downloadExcelUnMatched(name);
  }

  downloadExcelMatched(name: any): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.matchedData
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

  downloadExcelUnMatched(name: any): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.UnMatchedData
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
  }
}
