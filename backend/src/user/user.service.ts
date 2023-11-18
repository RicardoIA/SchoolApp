import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });
    return {
      ...createdUser,
      password: undefined,
    };
  }

  async getAll() {
    const users = await this.prisma.user.findMany();
    users.forEach((item) => (item.password = undefined));

    return users;
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('The user does not exist.');
    }

    user.password = undefined;
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    user.password = undefined;
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
      },
    });

    user.password = undefined;
    return user;
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }

  async isAdmin(id: number) {
    const user = await this.findById(id);

    if (user.role != Role.ADMIN) {
      throw new NotFoundException('The user is not a admin.');
    }
  }

  async isTeacher(id: number) {
    const user = await this.findById(id);

    if (user.role != Role.TEACHER) {
      throw new NotFoundException('The user is not a teacher.');
    }
  }

  async isStudent(id: number) {
    const user = await this.findById(id);

    if (user.role != Role.STUDENT) {
      throw new NotFoundException('The user is not a student.');
    }
  }
}
