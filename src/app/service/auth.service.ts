import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private _usuarioService: UsuarioService
  ) {}

  getAuthToken(): Observable<boolean> {
    return this._usuarioService.validate().pipe(
      map((res: any) => {
        console.log('auth token valido');
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('token invalido');
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
}
