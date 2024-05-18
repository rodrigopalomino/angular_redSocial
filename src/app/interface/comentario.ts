import { Usuario } from './usuario';

export interface Comentario {
  comentario_id?: number;
  publicacion_id: number;
  usuario_id?: number;
  contenido: string;
  usuario?: Usuario;
  createdAt?: string;
}
