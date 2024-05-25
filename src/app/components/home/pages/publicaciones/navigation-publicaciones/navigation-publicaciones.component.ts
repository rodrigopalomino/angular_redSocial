import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../../../../interface/publicacion';
import { PublicacionService } from '../../../../../service/publicacion.service';
import { LikeService } from '../../../../../service/like.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Like } from '../../../../../interface/like';
import { CommonModule } from '@angular/common';
import { DislikeService } from '../../../../../service/dislike.service';
import { Dislike } from '../../../../../interface/dislike';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-navigation-publicaciones',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './navigation-publicaciones.component.html',
  styleUrl: './navigation-publicaciones.component.css',
})
export class NavigationPublicacionesComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  likes: Like[] = [];
  dislikes: Dislike[] = [];
  form!: FormGroup;
  bool: boolean = true;

  constructor(
    private _publicacionService: PublicacionService,
    private _likeService: LikeService,
    private _dislikeService: DislikeService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getLikes();
    this.getDislike();
    this.getPublicaciones();
  }

  createForm() {
    this.form = this.fb.group({
      titulo: ['', []],
      item: ['', []],
      order: ['', []],
    });
  }

  submit() {
    if (this.bool) {
      this.getPublicaciones();
    } else {
      this.getPublicacionesUsuario();
    }
  }

  getPublicaciones() {
    const titulo = this.form.get('titulo')?.value;
    const item = this.form.get('item')?.value;
    const order = this.form.get('order')?.value;
    this.bool = true;

    this._publicacionService
      .getPublicaciones(titulo, item, order)
      .subscribe((data) => {
        this.publicaciones = data;
      });
  }

  getPublicacionesUsuario() {
    const titulo = this.form.get('titulo')?.value;
    const item = this.form.get('item')?.value;
    const order = this.form.get('order')?.value;
    this.bool = false;

    this._publicacionService
      .getPublicaionesUsuario(titulo, item, order)
      .subscribe((data) => {
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
        if (this.bool) {
          this.getPublicaciones();
        } else {
          this.getPublicacionesUsuario();
        }
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
        if (this.bool) {
          this.getPublicaciones();
        } else {
          this.getPublicacionesUsuario();
        }

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
