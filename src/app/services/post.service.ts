import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  getPosts3() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  createPost2(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return throwError(new BadInput(error));
        }
        return throwError(new AppError(error));
      })
    );
  }

  //making code more usable with createPost3 and handleError method

  createPost3(post) {
    return this.http
      .post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  deletePost(id) {
    console.log('dasda');
    return this.http.delete(this.url + '/69/' + id);
  }

  //some problem with jsonplaceholder thats why usnig /69

  //making code reusable with deletePost2
  deletePost2(id) {
    return this.http.delete(this.url + '/69/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      })
    );
  }

  //making code more usable with deletePost3 and handleError method
  deletePost3(id) {
    return this.http
      .delete(this.url + '/69/' + id)
      .pipe(catchError(this.handleError));
  }

  updatePost(post) {
    return this.http.patch(
      this.url + '/' + post.id,
      JSON.stringify({ isRead: true })
    );
  }

  updatePost2(post) {
    return this.http.patch(
      this.url + '/' + post.id,
      JSON.stringify({ isRead: true })
    );
  }

  //making code more usable with updatePost3 and handleError method
  updatePost3(post) {
    return this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
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
