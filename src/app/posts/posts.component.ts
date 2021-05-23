import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(
      (res: any) => {
        post['id'] = res.id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrors(error);
        } else {
          alert('unexected error');
        }
      }
    );
  }

  createPost2(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost2(post).subscribe(
      (res: any) => {
        post['id'] = res.id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
          console.log('badinput');
        } else {
          alert('unexected error');
        }
      }
    );
  }

  updatePost(post) {
    // this.http.put(this.url+ "/"+post.id,JSON.stringify(post))
    // or  instead of sending all properties..we send only those property which need to be updated ...also check if api support patch method
    this.service.updatePost(post).subscribe((res) => {
      console.log(res);
    });
  }

  updatePost2(post) {
    this.service.updatePost2(post).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        alert('an expected error occured');
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost('abc').subscribe(
      (res) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('This post has already been deleted');
        } else {
          alert('unexected error');
        }
      }
    );
  }

  deletePost2(post) {
    this.service.deletePost2(345).subscribe(
      (res) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else {
        }
      }
    );
  }

  //ngOninit is lifecycle hooks of angular..
  // ngOnInit is jst interface..we use it because http requst is very heavy for constructor
  ngOnInit() {
    this.service.getPosts().subscribe((res: any) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  //separation of concerns
}
