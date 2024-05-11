import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  form!: FormGroup;
  errorPassword!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password1: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }

  signUp() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        control.markAllAsTouched();
        console.log(this.form);
      });
      return;
    }

    if (
      this.form.get('password1')?.value !== this.form.get('password2')?.value
    ) {
      this.errorPassword = 'las password deben ser iguales';
      return;
    }

    const newUsuario: Usuario = {
      nombre: this.form.get('nombre')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password2')?.value,
    };

    this._usuarioService.signUp(newUsuario).subscribe({
      next: (res: any) => {
        console.log('nuevo usuario creado');
        console.log(res);
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        console.log('error');
        console.log(e);
      },
    });
  }
}
