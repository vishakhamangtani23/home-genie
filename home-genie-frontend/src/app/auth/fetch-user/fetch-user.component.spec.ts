import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserComponent } from './fetch-user.component';

describe('FetchUserComponent', () => {
  let component: FetchUserComponent;
  let fixture: ComponentFixture<FetchUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchUserComponent]
    });
    fixture = TestBed.createComponent(FetchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
