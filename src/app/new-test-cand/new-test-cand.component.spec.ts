import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestCandComponent } from './new-test-cand.component';

describe('NewTestCandComponent', () => {
  let component: NewTestCandComponent;
  let fixture: ComponentFixture<NewTestCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTestCandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTestCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
