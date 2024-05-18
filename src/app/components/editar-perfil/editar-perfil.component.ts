import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css',
})
export class EditarPerfilComponent {
  usuario!: Usuario;
  form!: FormGroup;

  constructor(
    private location: Location,
    private router: Router,
    private _usuarioService: UsuarioService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  createForm() {
    this.form = this.fb.group({
      avatar: [this.usuario.avatar, [Validators.required]],
      nombre: [this.usuario.nombre, [Validators.required]],
      info: [this.usuario.info, []],
      distrito: [2, []],
      estudio: [this.usuario.estudio, []],
      facebook: [this.usuario.facebook, []],
      github: [this.usuario.github, []],
      instagram: [this.usuario.instagram, []],
    });
  }

  getUsuario() {
    this._usuarioService.getUsuario().subscribe((data) => {
      this.usuario = data;
      this.createForm();
    });
  }

  submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        control.markAllAsTouched();
      });
      return;
    }

    const updateUsuario: Partial<Usuario> = {
      avatar: this.form.get('avatar')?.value,
      nombre: this.form.get('nombre')?.value,
      info: this.form.get('info')?.value,
      distrito: this.form.get('distrito')?.value,
      estudio: this.form.get('estudio')?.value,
      facebook: this.form.get('facebook')?.value,
      github: this.form.get('github')?.value,
      instagram: this.form.get('instagram')?.value,
    };

    this._usuarioService.updateUsuario(updateUsuario).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigate(['perfil']);
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }

  clickRetroceder() {
    this.location.back();
  }
}
