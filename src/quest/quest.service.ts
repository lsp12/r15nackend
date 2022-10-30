import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateQuestDto } from './dto/create-quest.dto';
import { UpdateQuestDto } from './dto/update-quest.dto';
import { Quest } from './entities/quest.entity';

@Injectable()
export class QuestService {
  constructor(
    @InjectModel(Quest)
    private questModel: typeof Quest,
  ) {}

  async create(createQuestDto: CreateQuestDto) {
    /* return this.questModel.create(createQuestDto); */
  }

  async findAll(): Promise<Quest[]> {
    return this.questModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} quest`;
  }

  update(id: number, updateQuestDto: UpdateQuestDto) {
    return `This action updates a #${id} quest`;
  }

  remove(id: number) {
    return `This action removes a #${id} quest`;
  }
}
