import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root',
})

//making code more reusable by extarcting data service as we may have 1000 of sevices
//make subsequent changes in component file
export class Data1Service {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  // using Map operator because we want respective object related to each method instead of response..So,using map to get response and in component using object directly like for getAll in ngOnInit() renaming res to posts & FOR createPost in post component renaming res to newPost etc..for delete method in compoenent simply erase res to () as we do not get any res.
  getAllmap() {
    return this.http.get(this.url).pipe(
      map((res) => res),
      catchError(this.handleError)
      //map returns response in terms of array
    );
  }

  //making code more usable with createPost3 and handleError method

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  createMap(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  //making code more usable with deletePost3 and handleError method
  delete(id) {
    return this.http
      .delete(this.url + '/69/' + id)
      .pipe(catchError(this.handleError));
  }

  deleteMap(id) {
    return this.http.delete(this.url + '/69/' + id).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  //making code more usable with updatePost3 and handleError method
  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
  }

  updateMap(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map((res) => res),
        catchError(this.handleError)
      );
  }

  //////------------------Making code more usable as if else AS statement is repeated in every methods

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
