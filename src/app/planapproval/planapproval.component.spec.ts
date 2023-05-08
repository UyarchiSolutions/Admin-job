import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanapprovalComponent } from './planapproval.component';

describe('PlanapprovalComponent', () => {
  let component: PlanapprovalComponent;
  let fixture: ComponentFixture<PlanapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
