import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPublicacionesComponent } from './contenido-publicaciones.component';

describe('ContenidoPublicacionesComponent', () => {
  let component: ContenidoPublicacionesComponent;
  let fixture: ComponentFixture<ContenidoPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoPublicacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
