import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DateFormatPipe } from '../../../../../pipe/date-format.pipe';
import { Publicacion } from '../../../../../interface/publicacion';
import { Comentario } from '../../../../../interface/comentario';
import { Usuario } from '../../../../../interface/usuario';
import { UsuarioService } from '../../../../../service/usuario.service';
import { PublicacionService } from '../../../../../service/publicacion.service';
import { ComentarioService } from '../../../../../service/comentario.service';

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
  usuario!: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _publicacionService: PublicacionService,
    private _comentarioService: ComentarioService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getUsuario();
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
        this.getComentarios(publicacion_id);
      },
      error: (e: HttpErrorResponse) => {
        console.error();
      },
    });
  }

  getComentarios(publicacion_id: number) {
    this._comentarioService.getComentarios(publicacion_id).subscribe((data) => {
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

  getUsuario() {
    this._usuarioService.getUsuario().subscribe((data) => {
      this.usuario = data;
    });
  }

  clickEditarPubliacion(publicacion_id: number) {
    this.router.navigateByUrl(`/publicaciones/update/${publicacion_id}`);
  }

  clickCargarComentarios(publicacion_id: number) {
    this.boolContenido = !this.boolContenido;
    this._comentarioService.getComentarios(publicacion_id).subscribe((data) => {
      this.comentarios = data;
    });
  }

  clickDeletePublicacion(publicacion_id: number) {
    this._publicacionService.deletePublicacion(publicacion_id).subscribe({
      next: (res: any) => {
        window.location.reload();
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }
}
