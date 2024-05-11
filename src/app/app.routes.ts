import { Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './util/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NavigationChatComponent } from './components/home/pages/navigation-chat/navigation-chat.component';
import { NavigationPublicacionesComponent } from './components/home/pages/navigation-publicaciones/navigation-publicaciones.component';
import { ContenidoChatComponent } from './components/home/pages/contenido-chat/contenido-chat.component';
import { ContenidoPublicacionesComponent } from './components/home/pages/contenido-publicaciones/contenido-publicaciones.component';
import { CreatePublicacionComponent } from './components/create-publicacion/create-publicacion.component';

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
        path: 'page-chat',
        component: ContenidoChatComponent,
        outlet: 'contenido',
      },
      {
        path: 'page-publicaciones',
        component: ContenidoPublicacionesComponent,
        outlet: 'contenido',
      },
    ],
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
];
