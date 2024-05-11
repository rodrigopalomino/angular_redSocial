import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationChatComponent } from './navigation-chat.component';

describe('NavigationChatComponent', () => {
  let component: NavigationChatComponent;
  let fixture: ComponentFixture<NavigationChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
