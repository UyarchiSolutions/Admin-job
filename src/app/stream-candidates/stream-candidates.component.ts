import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stream-candidates',
  templateUrl: './stream-candidates.component.html',
  styleUrls: ['./stream-candidates.component.css'],
})
export class StreamCandidatesComponent implements OnInit {
  constructor(
    private api: CommonService,
    private Aroute: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.getCandidates();
  }

  Stream: any = [];
  getCandidates() {
    this.Aroute.queryParams.subscribe((e: any) => {
      this.api.getStreamsByCand(e.id).subscribe((res: any) => {
        this.Stream = res;
      });
    });
  }

  downloadVideo(urls: any) {
    this.api.loader = true;
    this.http.get(urls, { responseType: 'blob' }).subscribe(
      (data: any) => {
        this.api.loader = false;
        const blob = new Blob([data], { type: 'video/mp4' });
        const url = window.URL.createObjectURL(blob);

        // Create a link and trigger a click to start the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video.mp4';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        this.api.loader = false;
        console.error('Error downloading the video', error);
      }
    );
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
}
