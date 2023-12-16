import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNewUsersComponent } from './test-new-users.component';

describe('TestNewUsersComponent', () => {
  let component: TestNewUsersComponent;
  let fixture: ComponentFixture<TestNewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
