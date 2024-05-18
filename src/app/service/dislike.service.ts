import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dislike } from '../interface/dislike';

@Injectable({
  providedIn: 'root',
})
export class DislikeService {
  api: string = 'http://localhost:3000/dislike';

  constructor(private http: HttpClient) {}

  dislike(publicacion_id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/create/${publicacion_id}`, {
      withCredentials: true,
    });
  }

  getDislikes(): Observable<Dislike[]> {
    return this.http.get<Dislike[]>(`${this.api}`, { withCredentials: true });
  }
}
