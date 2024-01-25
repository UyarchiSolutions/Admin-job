import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCandidatesComponent } from './stream-candidates.component';

describe('StreamCandidatesComponent', () => {
  let component: StreamCandidatesComponent;
  let fixture: ComponentFixture<StreamCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
