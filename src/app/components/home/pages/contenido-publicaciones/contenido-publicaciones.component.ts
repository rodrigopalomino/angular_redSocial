import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionService } from '../../../../service/publicacion.service';
import { Publicacion } from '../../../../interface/publicacion';
import { CommonModule } from '@angular/common';
import { ComentarioService } from '../../../../service/comentario.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Comentario } from '../../../../interface/comentario';
import { HttpErrorResponse } from '@angular/common/http';
import { DateFormatPipe } from '../../../../pipe/date-format.pipe';

@Component({
  selector: 'app-contenido-publicaciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DateFormatPipe],
  templateUrl: './contenido-publicaciones.component.html',
  styleUrl: './contenido-publicaciones.component.css',
})
export class ContenidoPublicacionesComponent implements OnInit {
  form!: FormGroup;
  boolContenido: boolean = true;
  publicacion!: Publicacion;
  comentarios: Comentario[] = [];

  constructor(
    private route: ActivatedRoute,
    private _publicacionService: PublicacionService,
    private _comentarioService: ComentarioService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getPublicacion();
  }

  createForm() {
    this.form = this.fb.group({
      contenido: ['', [Validators.required]],
    });
  }

  submit(publicacion_id: number) {
    const newComentario: Comentario = {
      publicacion_id: publicacion_id,
      contenido: this.form.get('contenido')?.value,
    };

    this._comentarioService.createComentario(newComentario).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getComentarios(publicacion_id);
      },
      error: (e: HttpErrorResponse) => {
        console.error();
      },
    });
  }

  clickCargarComentarios(publicacion_id: number) {
    this.boolContenido = !this.boolContenido;
    this._comentarioService.getComentarios(publicacion_id).subscribe((data) => {
      console.log(data);
      this.comentarios = data;
    });
  }

  getComentarios(publicacion_id: number) {
    this._comentarioService.getComentarios(publicacion_id).subscribe((data) => {
      console.log(data);
      this.comentarios = data;
    });
  }

  getPublicacion() {
    this._publicacionService.GetPublicacionId.subscribe((data) => {
      this._publicacionService
        .getPublicacion(data.publicacion_id)
        .subscribe((data) => {
          this.publicacion = data;
        });
    });
  }
}
