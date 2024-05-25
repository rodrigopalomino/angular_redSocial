import { Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './util/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NavigationChatComponent } from './components/home/pages/chat/navigation-chat/navigation-chat.component';
import { NavigationPublicacionesComponent } from './components/home/pages/publicaciones/navigation-publicaciones/navigation-publicaciones.component';
import { ContenidoChatComponent } from './components/home/pages/chat/contenido-chat/contenido-chat.component';
import { CreatePublicacionComponent } from './components/create-publicacion/create-publicacion.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditarPublicacionComponent } from './components/editar-publicacion/editar-publicacion.component';
import { ContenidoPublicacionesComponent } from './components/home/pages/publicaciones/contenido-publicaciones/contenido-publicaciones.component';
import { ContenidoPersonasComponent } from './components/home/pages/personas/contenido-personas/contenido-personas.component';
import { NavigationPersonasComponent } from './components/home/pages/personas/navigation-personas/navigation-personas.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
    children: [
      {
        path: 'chat',
        component: NavigationChatComponent,
      },
      {
        path: 'publicaciones',
        component: NavigationPublicacionesComponent,
      },
      {
        path: 'personas',
        component: NavigationPersonasComponent,
      },
      {
        path: 'page-chat',
        component: ContenidoChatComponent,
        outlet: 'contenido',
      },
      {
        path: 'page-publicaciones',
        component: ContenidoPublicacionesComponent,
        outlet: 'contenido',
      },
      {
        path: 'page-personas',
        component: ContenidoPersonasComponent,
        outlet: 'contenido',
      },
    ],
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'editarPerfil',
    component: EditarPerfilComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'publicaciones/create',
    component: CreatePublicacionComponent,
  },
  {
    path: 'publicaciones/update/:publicacion_id',
    component: EditarPublicacionComponent,
  },
];
