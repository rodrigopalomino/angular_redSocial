import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PublicacionService } from '../../service/publicacion.service';
import { Publicacion } from '../../interface/publicacion';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-publicacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-publicacion.component.html',
  styleUrl: './create-publicacion.component.css',
})
export class CreatePublicacionComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _publiacionService: PublicacionService,
    private router: Router,
    private location: Location
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      contenido: ['', [Validators.required]],
    });
  }

  crearPublicacion() {
    const newPublicacion: Publicacion = {
      titulo: this.form.get('titulo')?.value,
      sinopsis: this.form.get('sinopsis')?.value,
      contenido: this.form.get('contenido')?.value,
    };

    this._publiacionService.createPublicacion(newPublicacion).subscribe({
      next: (res: any) => {
        console.log(res);
        this.location.back();
        // this.router.navigateByUrl(
        //   `/publicaciones(contenido:page-publicaciones)`
        // );
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },
    });
  }
}
