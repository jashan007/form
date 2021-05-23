import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { Post1Component } from './post1/post1.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostGlobalErrorHandlingComponent } from './post-global-error-handling/post-global-error-handling.component';
import { PostMapAndOptimisticAndPromiseComponent } from './post-map-and-optimistic-and-promise/post-map-and-optimistic-and-promise.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    Post1Component,
    PostGlobalErrorHandlingComponent,
    PostMapAndOptimisticAndPromiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  //But we want to tell angular that where INTERNALLY  we are using errorhandler class,instead use ApperrorHandler class..therefore changing syntax by using objct instead of class.
  bootstrap: [AppComponent],
})
export class AppModule {}
