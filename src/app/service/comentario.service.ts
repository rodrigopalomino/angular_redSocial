import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interface/comentario';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  api: string = 'http://localhost:3000/comentario';

  constructor(private http: HttpClient) {}

  getComentarios(publicacion_id: number): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.api}/${publicacion_id}`, {
      withCredentials: true,
    });
  }

  createComentario(comentario: Comentario): Observable<any> {
    return this.http.post<any>(`${this.api}/create`, comentario, {
      withCredentials: true,
    });
  }
}
