import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css'],
})
export class Post1Component implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post)).subscribe((res: any) => {
      post['id'] = res.id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    // this.http.put(this.url+ "/"+post.id,JSON.stringify(post))
    // or  instead of sending all properties..we send only those property which need to be updated ...also check if api support patch method
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe((res) => {
        console.log(res);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe((res) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  //ngOninit is lifecycle hooks of angular..
  // ngOnInit is jst interface..we use it because http requst is very heavy for constructor
  ngOnInit() {
    this.http.get(this.url).subscribe((res: any) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  //separation of concerns
}
