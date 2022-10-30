import { Module } from '@nestjs/common';
import { EncuestasService } from './encuestas.service';
import { EncuestasController } from './encuestas.controller';
import { Encuesta } from './entities/encuesta.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Encuesta])],
  controllers: [EncuestasController],
  providers: [EncuestasService],
})
export class EncuestasModule {}
