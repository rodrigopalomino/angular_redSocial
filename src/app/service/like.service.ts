import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  api: string;

  constructor(private http: HttpClient) {
    // this.api = 'http://localhost:3000/like';
    this.api = 'https://gjwtnwmv-3000.brs.devtunnels.ms/like';
  }

  like(publicacion_id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/like/${publicacion_id}`, {
      withCredentials: true,
    });
  }
  disike(publicacion_id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/dislike/${publicacion_id}`, {
      withCredentials: true,
    });
  }
}
