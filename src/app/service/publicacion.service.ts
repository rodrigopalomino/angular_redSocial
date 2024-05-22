import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../interface/publicacion';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  @Output() GetPublicacionId: EventEmitter<any> = new EventEmitter();
  api: string = 'http://localhost:3000/publicacion';
  // api: string = 'https://gjwtnwmv-3000.brs.devtunnels.ms/publicacion';

  constructor(private http: HttpClient) {}

  getPublicaciones(titulo: string): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.api}?search=${titulo}`, {
      withCredentials: true,
    });
  }

  getPublicaionesUsuario(titulo: string): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(
      `${this.api}/usuario?search=${titulo}`,
      {
        withCredentials: true,
      }
    );
  }

  getPublicacion(publicacion_id: string): Observable<Publicacion> {
    return this.http.get<Publicacion>(`${this.api}/${publicacion_id}`, {
      withCredentials: true,
    });
  }

  createPublicacion(publicacion: Publicacion): Observable<any> {
    return this.http.post<any>(`${this.api}/create`, publicacion, {
      withCredentials: true,
    });
  }

  updatePublicacion(publicacion: Partial<Publicacion>): Observable<any> {
    return this.http.put(`${this.api}/update`, publicacion, {
      withCredentials: true,
    });
  }

  deletePublicacion(publicacion_id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/delete/${publicacion_id}`, {
      withCredentials: true,
    });
  }
}
