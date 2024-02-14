import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRatingComponent } from './tech-rating.component';

describe('TechRatingComponent', () => {
  let component: TechRatingComponent;
  let fixture: ComponentFixture<TechRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
