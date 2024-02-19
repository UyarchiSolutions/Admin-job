import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError, BehaviorSubject, finalize, forkJoin } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private authcheck: CommonService) { }
  showloader: any = false;
  private activeRequests = 0;
  private requests = 0; // Counter to keep track of ongoing requests

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests++;
    if (!this.showloader) {
      setTimeout(() => {
        this.authcheck.change_header(true)
      }, 0)
      this.showloader = true;
    }
    return next.handle(request).pipe(
      tap(
        () => { },
        (error) => {
          let errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;

          } else {
            if (error.status === 401) {
              errorMessage = `Unauthorized access`;
              localStorage.removeItem('buyerAuth')
              this.router.navigate([''])
            }
            else {
              errorMessage = error.error.message;
            }
          }
          this.requests--;
          if (this.requests === 0) {
            this.showloader = false;
            setTimeout(() => {
              this.authcheck.change_header(false)
            }, 500)
          }
          return throwError(errorMessage);
        },
        () => {
          this.requests--;
          if (this.requests === 0) {
            this.showloader = false;
            setTimeout(() => {
              this.authcheck.change_header(false)
            }, 500)
          }
        }
      )
    );
  }

}
