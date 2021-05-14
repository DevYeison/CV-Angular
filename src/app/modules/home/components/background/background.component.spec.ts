import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientBackgroundComponent } from './background.component';

describe('CarouselComponent', () => {
  let component: GradientBackgroundComponent;
  let fixture: ComponentFixture<GradientBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
