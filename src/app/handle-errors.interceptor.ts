import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HandleErrorService } from './services/handle-error.service';

@Injectable()
export class HandleErrorsInterceptor implements HttpInterceptor {
  constructor(private errorHandlerService: HandleErrorService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return new Observable((obs) => {
      next.handle(request).subscribe(
        (res: HttpEvent<any>) => {
          if (res instanceof HttpResponse) {
            obs.next(res);
          }
        },
        (err: HttpErrorResponse) => {
          this.errorHandlerService.handleError(err);
        }
      );
    });
  }
}
