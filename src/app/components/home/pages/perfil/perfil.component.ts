import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../../interface/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
  usuario!: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this._usuarioService.getUsuario().subscribe((data) => {
      this.usuario = data;
    });
  }

  clickLogOut() {
    this._usuarioService.logOut().subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/login');
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }

  clickVerPerfil() {
    this.router.navigateByUrl('/perfil');
  }
}
