import { Component } from '@angular/core';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PerfilComponent, NavigationComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
