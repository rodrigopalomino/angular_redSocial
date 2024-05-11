import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent {
  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {}

  clickLogOut() {
    this._usuarioService.logOut().subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigateByUrl('/login');
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }
}
