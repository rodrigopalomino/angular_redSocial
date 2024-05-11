import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    // console.log('asad');
  }

  createForm() {
    this.form = this.fb.group({
      email: ['rodrigo@gmail.com', [Validators.required]],
      password: ['rodrigo', [Validators.required]],
    });
  }

  login() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    this._usuarioService.login(email, password).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigateByUrl(
          `/publicaciones(contenido:page-publicaciones)`
        );
      },
      error: (e: HttpErrorResponse) => {
        console.log('error');
        console.log(e);
        this.error = 'Email o password incorrecta.';
      },
    });
  }
}
