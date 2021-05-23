import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert(
      'unexpected error implemented using global error handling:Error Handler'
    );
    console.log(error);
  }
}
