import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPerfilComponent } from './contenido-perfil.component';

describe('ContenidoPerfilComponent', () => {
  let component: ContenidoPerfilComponent;
  let fixture: ComponentFixture<ContenidoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
