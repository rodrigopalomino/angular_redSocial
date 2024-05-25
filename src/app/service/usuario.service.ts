import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  api: string = 'http://localhost:3000/usuario';
  // api: string = 'https://gjwtnwmv-3000.brs.devtunnels.ms/usuario';

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.api}/token`, {
      withCredentials: true,
    });
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.api}`, {
      withCredentials: true,
    });
  }

  validate(): Observable<any> {
    return this.http.get(`${this.api}/validate`, { withCredentials: true });
  }

  signUp(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.api}/signUp`, usuario);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.api}/login`,
      { email, password },
      { withCredentials: true }
    );
  }

  logOut(): Observable<any> {
    return this.http.get<any>(`${this.api}/logOut`, { withCredentials: true });
  }

  updateUsuario(usuario: Partial<Usuario>): Observable<any> {
    return this.http.put<any>(`${this.api}/update`, usuario, {
      withCredentials: true,
    });
  }
}
