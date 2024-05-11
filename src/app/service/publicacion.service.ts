import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../interface/publicacion';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  api: string;

  constructor(private http: HttpClient) {
    // this.api = 'http://localhost:3000/publicacion';
    this.api = 'https://gjwtnwmv-3000.brs.devtunnels.ms/publicacion';
  }

  getPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.api}`, {
      withCredentials: true,
    });
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
}
