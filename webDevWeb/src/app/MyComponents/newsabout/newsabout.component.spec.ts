import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsaboutComponent } from './newsabout.component';

describe('NewsaboutComponent', () => {
  let component: NewsaboutComponent;
  let fixture: ComponentFixture<NewsaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
