import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPublicacionComponent } from './editar-publicacion.component';

describe('EditarPublicacionComponent', () => {
  let component: EditarPublicacionComponent;
  let fixture: ComponentFixture<EditarPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPublicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
