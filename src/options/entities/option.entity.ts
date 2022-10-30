import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Encuesta } from 'src/encuestas/entities/encuesta.entity';
import { Quest } from 'src/quest/entities/quest.entity';

@Table
export class Option extends Model {
  @Column
  option: string;

  @ForeignKey(() => Quest)
  @Column
  questId: number;

  @BelongsTo(() => Quest)
  quest: Quest;

  @HasMany(() => Encuesta)
  encuesta: Encuesta[];
}
