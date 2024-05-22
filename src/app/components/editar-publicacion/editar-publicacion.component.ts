import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../service/publicacion.service';
import { Publicacion } from '../../interface/publicacion';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-publicacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-publicacion.component.html',
  styleUrl: './editar-publicacion.component.css',
})
export class EditarPublicacionComponent implements OnInit {
  publicacion!: Publicacion;
  form!: FormGroup;

  constructor(
    private _publiacionService: PublicacionService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPublicacion();
  }

  createForm() {
    this.form = this.fb.group({
      titulo: [this.publicacion.titulo, [Validators.required]],
      sinopsis: [this.publicacion.sinopsis, [Validators.required]],
      contenido: [this.publicacion.contenido, [Validators.required]],
    });
  }

  submit() {
    const upPublicacion: Publicacion = {
      publicacion_id: this.publicacion.publicacion_id,
      titulo: this.form.get('titulo')?.value,
      sinopsis: this.form.get('sinopsis')?.value,
      contenido: this.form.get('contenido')?.value,
    };

    this._publiacionService.updatePublicacion(upPublicacion).subscribe({
      next: (res: any) => {
        console.log(res);
        this.location.back();
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }

  getPublicacion() {
    const publicacion_id = this.activeRoute.snapshot.params['publicacion_id'];

    this._publiacionService.getPublicacion(publicacion_id).subscribe((data) => {
      this.publicacion = data;
      this.createForm();
    });
  }
}
