import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHelpComponent } from './chat-help.component';

describe('ChatHelpComponent', () => {
  let component: ChatHelpComponent;
  let fixture: ComponentFixture<ChatHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHelpComponent]
    });
    fixture = TestBed.createComponent(ChatHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
