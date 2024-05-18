import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';

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
    private location: Location,
    private _usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this._usuarioService.getUsuario().subscribe((data) => {
      this.usuario = data;
      console.log(data);
    });
  }

  clickRetroceder() {
    this.location.back();
  }
}
