import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../interface/like';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  api: string = 'http://localhost:3000/like';

  constructor(private http: HttpClient) {}

  like(publicacion_id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/create/${publicacion_id}`, {
      withCredentials: true,
    });
  }

  getLikes(): Observable<Like[]> {
    return this.http.get<Like[]>(`${this.api}`, { withCredentials: true });
  }
}
