import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userModel.create<User>({ ...createUserDto });
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findOne<User>({
      where: {
        id,
      },
    });
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update<User>({ ...updateUserDto }, { where: { id } });
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userModel.destroy<User>({ where: { id } });
    return `This action removes a #${id} user`;
  }
}
