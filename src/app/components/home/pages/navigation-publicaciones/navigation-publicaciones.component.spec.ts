import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPublicacionesComponent } from './navigation-publicaciones.component';

describe('NavigationPublicacionesComponent', () => {
  let component: NavigationPublicacionesComponent;
  let fixture: ComponentFixture<NavigationPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationPublicacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
