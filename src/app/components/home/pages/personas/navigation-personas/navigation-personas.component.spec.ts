import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPersonasComponent } from './navigation-personas.component';

describe('NavigationPersonasComponent', () => {
  let component: NavigationPersonasComponent;
  let fixture: ComponentFixture<NavigationPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationPersonasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
