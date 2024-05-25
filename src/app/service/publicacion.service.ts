import { HttpClient, HttpParams } from '@angular/common/http';
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

  getPublicaciones(
    titulo?: string,
    item?: string,
    order?: string
  ): Observable<Publicacion[]> {
    let params = new HttpParams();

    if (titulo) {
      params = params.set('titulo', titulo);
    }

    if (item && order) {
      params = params.set('item', item).set('order', order);
    }

    return this.http.get<Publicacion[]>(this.api, {
      params,
      withCredentials: true,
    });
  }

  getPublicaionesUsuario(
    titulo?: string,
    item?: string,
    order?: string
  ): Observable<Publicacion[]> {
    let params = new HttpParams();

    if (titulo) {
      params = params.set('titulo', titulo);
    }

    if (item && order) {
      params = params.set('item', item).set('order', order);
    }

    return this.http.get<Publicacion[]>(`${this.api}/usuario`, {
      params,
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
