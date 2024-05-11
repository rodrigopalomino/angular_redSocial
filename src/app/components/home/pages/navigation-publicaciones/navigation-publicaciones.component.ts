import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../../../interface/publicacion';
import { PublicacionService } from '../../../../service/publicacion.service';
import { LikeService } from '../../../../service/like.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-publicaciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-publicaciones.component.html',
  styleUrl: './navigation-publicaciones.component.css',
})
export class NavigationPublicacionesComponent implements OnInit {
  publicaciones!: Publicacion[];

  constructor(
    private _publicacionService: PublicacionService,
    private _likeService: LikeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones() {
    this._publicacionService.getPublicaciones().subscribe((data) => {
      this.publicaciones = data;
      console.log(this.publicaciones);
    });
  }

  clickLike(publicacion_id: number) {
    console.log('click like');
    this._likeService.like(publicacion_id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getPublicaciones();
      },
      error: (e: HttpErrorResponse) => {
        console.log(console.error());
      },
    });
  }

  clickDislike(publicacion_id: number) {
    console.log('click dislike');

    this._likeService.disike(publicacion_id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getPublicaciones();
      },
      error: (e: HttpErrorResponse) => {
        console.log(console.error());
      },
    });
  }

  createPublicacion() {
    this.router.navigateByUrl('/publicaciones/create');
  }
}
