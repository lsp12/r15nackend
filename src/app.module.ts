import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EncuestasModule } from './encuestas/encuestas.module';
import { QuestModule } from './quest/quest.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'r15al',
      autoLoadModels: true,
      synchronize: true,
      sync: {
        force: true,
      },
    }),
    UserModule,
    EncuestasModule,
    QuestModule,
    OptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
