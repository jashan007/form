import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-global-error-handling',
  templateUrl: './post-global-error-handling.component.html',
  styleUrls: ['./post-global-error-handling.component.css'],
})
export class PostGlobalErrorHandlingComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  createPost3(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(
      (res: any) => {
        post['id'] = res.id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
          console.log('badinput');
        } else throw error;
      }
    );
  }

  updatePost3(post) {
    this.service.updatePost(post).subscribe((res) => {
      console.log(res);
    });
  }

  deletePost3(post) {
    this.service.deletePost(345).subscribe(
      (res) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else throw error;
      }
    );
  }
  ngOnInit() {
    this.service.getPosts().subscribe((res: any) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  //separation of concerns
}
