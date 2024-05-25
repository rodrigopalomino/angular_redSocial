import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPersonasComponent } from './contenido-personas.component';

describe('ContenidoPersonasComponent', () => {
  let component: ContenidoPersonasComponent;
  let fixture: ComponentFixture<ContenidoPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoPersonasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
