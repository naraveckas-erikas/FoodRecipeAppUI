import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  constructor(private toaster: ToastrService) {}

  public handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      switch (err.status) {
        case 400:
          errorMessage = `Username or password is incorrect`;
          break;
        default:
          errorMessage = `Something went wrong`;
      }
    }
    this.toaster.error(errorMessage, err.status.toString());
  }
}
