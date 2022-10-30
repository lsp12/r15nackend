import { DataTypes } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Option } from 'src/options/entities/option.entity';

@Table
export class Quest extends Model {
  @Column
  quest: string;

  @Column({ defaultValue: true })
  active: boolean;

  @Column
  response: string;

  @HasMany(() => Option)
  options: Option[];
}
