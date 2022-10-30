import { DataTypes } from 'sequelize';
import { Table, Column, HasMany, Model } from 'sequelize-typescript';
import { Encuesta } from 'src/encuestas/entities/encuesta.entity';
type Rol = ['admin', 'colavorador', 'gerente'];

@Table
export class User extends Model {
  @Column
  nombre: string;

  @Column
  apellido: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column(DataTypes.ARRAY(DataTypes.STRING))
  rol: Rol;

  @Column
  contraseña: string;

  @HasMany(() => Encuesta)
  encuesta: Encuesta[];
}
