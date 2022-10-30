import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Option } from './entities/option.entity';

@Module({
  imports: [SequelizeModule.forFeature([Option])],
  controllers: [OptionsController],
  providers: [OptionsService],
})
export class OptionsModule {}
