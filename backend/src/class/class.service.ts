import { Injectable, NotFoundException } from '@nestjs/common';
import { DocumentService } from 'src/document/document.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectService } from 'src/subject/subject.service';
import { TaskService } from 'src/task/task.service';
import { UserService } from 'src/user/user.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly user: UserService,
    private readonly subject: SubjectService,
    private readonly document: DocumentService,
    private readonly task: TaskService,
  ) {}

  async create(createClassDto: CreateClassDto) {
    if (createClassDto.teacherId) {
      await this.user.isTeacher(createClassDto.teacherId);
    }

    if (createClassDto.subjectId) {
      await this.subject.isExist(createClassDto.subjectId);
    }

    if (createClassDto.documentId) {
      await this.document.isExist(createClassDto.documentId);
    }

    if (createClassDto.taskId) {
      await this.task.isExist(createClassDto.taskId);
    }
    console.log(createClassDto);
    return await this.prisma.class.create({ data: createClassDto });
  }

  async findAll() {
    return await this.prisma.class.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.class.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    if (updateClassDto.teacherId) {
      await this.user.isTeacher(updateClassDto.teacherId);
    }

    if (updateClassDto.subjectId) {
      await this.subject.isExist(updateClassDto.subjectId);
    }

    if (updateClassDto.documentId) {
      await this.document.isExist(updateClassDto.documentId);
    }

    if (updateClassDto.taskId) {
      await this.task.isExist(updateClassDto.taskId);
    }

    return await this.prisma.class.update({
      where: { id },
      data: {
        ...updateClassDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.class.delete({
      where: { id },
    });
  }

  async isExist(id: number) {
    const classData = await this.findOne(id);

    if (!classData) {
      throw new NotFoundException('The class does not exist.');
    }
  }
}
