import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { Quest } from './entities/quest.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Quest])],
  controllers: [QuestController],
  providers: [QuestService],
})
export class QuestModule {}
