import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../../../interface/publicacion';
import { PublicacionService } from '../../../../service/publicacion.service';
import { LikeService } from '../../../../service/like.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Like } from '../../../../interface/like';
import { CommonModule } from '@angular/common';
import { DislikeService } from '../../../../service/dislike.service';
import { Dislike } from '../../../../interface/dislike';

@Component({
  selector: 'app-navigation-publicaciones',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation-publicaciones.component.html',
  styleUrl: './navigation-publicaciones.component.css',
})
export class NavigationPublicacionesComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  likes: Like[] = [];
  dislikes: Dislike[] = [];

  constructor(
    private _publicacionService: PublicacionService,
    private _likeService: LikeService,
    private _dislikeService: DislikeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLikes();
    this.getDislike();
    this.getPublicaciones();
  }

  getPublicaciones() {
    this._publicacionService.getPublicaciones().subscribe((data) => {
      this.publicaciones = data;
    });
  }

  getLikes() {
    this._likeService.getLikes().subscribe((data) => {
      this.likes = data;
    });
  }

  getDislike() {
    this._dislikeService.getDislikes().subscribe((data) => {
      this.dislikes = data;
    });
  }

  clickPublicacion(publicacion_id: number | undefined) {
    this._publicacionService.GetPublicacionId.emit({
      publicacion_id,
    });
  }

  clickLike(publicacion_id: number) {
    this._likeService.like(publicacion_id).subscribe({
      next: (res: any) => {
        this.getPublicaciones();
        this.getLikes();
        this.getDislike();
      },
      error: (e: HttpErrorResponse) => {
        console.log(console.error());
      },
    });
  }

  clickDislike(publicacion_id: number) {
    this._dislikeService.dislike(publicacion_id).subscribe({
      next: (res: any) => {
        this.getPublicaciones();
        this.getLikes();
        this.getDislike();
      },
      error: (e: HttpErrorResponse) => {
        console.log(console.error());
      },
    });
  }

  boolLike(publicacion_id: number) {
    return this.likes.some((like) => like.publicacion_id == publicacion_id);
  }
  boolDislike(publicacion_id: number) {
    return this.dislikes.some(
      (dislike) => dislike.publicacion_id == publicacion_id
    );
  }

  createPublicacion() {
    this.router.navigateByUrl('/publicaciones/create');
  }
}
