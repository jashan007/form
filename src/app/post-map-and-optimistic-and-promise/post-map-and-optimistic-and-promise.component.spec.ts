import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMapAndOptimisticAndPromiseComponent } from './post-map-and-optimistic-and-promise.component';

describe('PostMapAndOptimisticAndPromiseComponent', () => {
  let component: PostMapAndOptimisticAndPromiseComponent;
  let fixture: ComponentFixture<PostMapAndOptimisticAndPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMapAndOptimisticAndPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMapAndOptimisticAndPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
