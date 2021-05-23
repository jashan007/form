import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGlobalErrorHandlingComponent } from './post-global-error-handling.component';

describe('PostGlobalErrorHandlingComponent', () => {
  let component: PostGlobalErrorHandlingComponent;
  let fixture: ComponentFixture<PostGlobalErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGlobalErrorHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGlobalErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
