import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../../service/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../../../../interface/usuario';

@Component({
  selector: 'app-navigation-personas',
  standalone: true,
  imports: [],
  templateUrl: './navigation-personas.component.html',
  styleUrl: './navigation-personas.component.css',
})
export class NavigationPersonasComponent implements OnInit {
  usuarios!: Usuario[];
  form!: FormGroup;

  constructor(
    private _usuarioService: UsuarioService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this._usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
}
