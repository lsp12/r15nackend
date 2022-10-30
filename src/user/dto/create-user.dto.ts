import { Model } from 'sequelize';
import { User } from '../entities/user.entity';
type Rol = ['admin', 'colavorador', 'gerente'];
export class CreateUserDto {
  id?: number;

  nombre: string;

  apellido: string;

  isActive: boolean;

  rol: Rol;

  contraseña: string;
}
