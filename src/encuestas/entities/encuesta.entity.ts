import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Option } from 'src/options/entities/option.entity';
import { User } from 'src/user/entities/user.entity';

@Table
export class Encuesta extends Model {
  @Column
  lat: number;

  @Column
  log: number;

  @Column
  quest: string;

  @Column
  respuesta: string;

  @ForeignKey(() => Option)
  @Column
  optionId: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => Option)
  option: Option;

  @BelongsTo(() => User)
  user: User;
}
