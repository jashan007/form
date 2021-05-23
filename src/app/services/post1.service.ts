import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data1Service } from './data1.service';

@Injectable({
  providedIn: 'root',
})
export class Post1Service extends Data1Service {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
