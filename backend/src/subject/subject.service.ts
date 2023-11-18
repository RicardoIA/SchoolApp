import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly user: UserService,
    private readonly course: CourseService,
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    if (createSubjectDto.teacherId) {
      await this.user.isTeacher(createSubjectDto.teacherId);
    }

    if (createSubjectDto.courseId) {
      await this.course.isExists(createSubjectDto.courseId);
    }

    return await this.prisma.subject.create({ data: createSubjectDto });
  }

  async findAll() {
    return await this.prisma.subject.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.subject.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    if (updateSubjectDto.teacherId) {
      await this.user.isTeacher(updateSubjectDto.teacherId);
    }

    if (updateSubjectDto.courseId) {
      await this.course.isExists(updateSubjectDto.courseId);
    }

    return await this.prisma.subject.update({
      where: { id },
      data: {
        ...updateSubjectDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.subject.delete({
      where: { id },
    });
  }

  async isExist(id: number) {
    const subject = await this.findOne(id);

    if (!subject) {
      throw new NotFoundException('The subject does not exist.');
    }
  }
}
