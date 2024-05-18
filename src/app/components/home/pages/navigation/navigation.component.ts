import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  boolChat!: boolean;
  boolPublicaciones!: boolean;
  boolPersonas!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.boolChat = this.router.url.includes('chat');
    this.boolPublicaciones = this.router.url.includes('publicaciones');
    this.boolPersonas = this.router.url.includes('personas');
  }

  seleccionarChat() {
    this.boolChat = true;
    this.boolPublicaciones = false;
    this.boolPersonas = false;
  }

  seleccionarPublicaciones() {
    this.boolChat = false;
    this.boolPublicaciones = true;
    this.boolPersonas = false;
  }

  seleccionarPersonas() {
    this.boolChat = false;
    this.boolPublicaciones = false;
    this.boolPersonas = true;
  }
}
