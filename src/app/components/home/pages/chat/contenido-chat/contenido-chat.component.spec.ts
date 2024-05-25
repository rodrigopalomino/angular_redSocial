import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoChatComponent } from './contenido-chat.component';

describe('ContenidoChatComponent', () => {
  let component: ContenidoChatComponent;
  let fixture: ComponentFixture<ContenidoChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
