import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectService } from 'src/subject/subject.service';
import { UserService } from 'src/user/user.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly user: UserService,
    private readonly subject: SubjectService,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    if (createTaskDto.authorId) {
      await this.user.isTeacher(createTaskDto.authorId);
    }

    if (createTaskDto.subjectId) {
      await this.subject.isExist(createTaskDto.subjectId);
    }

    return await this.prisma.task.create({ data: createTaskDto });
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    if (updateTaskDto.authorId) {
      await this.user.isTeacher(updateTaskDto.authorId);
    }

    if (updateTaskDto.subjectId) {
      await this.subject.isExist(updateTaskDto.subjectId);
    }

    return await this.prisma.task.update({
      where: { id },
      data: {
        ...updateTaskDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.document.delete({
      where: { id },
    });
  }

  async isExist(id: number) {
    const task = await this.findOne(id);

    if (!task) {
      throw new NotFoundException('The task does not exist.');
    }
  }
}
