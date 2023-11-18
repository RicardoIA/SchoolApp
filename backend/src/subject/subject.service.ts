import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class SubjectService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly user: UserService,
    private readonly course: CourseService,
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    const data = {
      ...createSubjectDto,
    };
    const userTeacher = await this.user.findById(createSubjectDto.teacherId);

    if (!userTeacher) {
      throw new NotFoundException('The user does not exist.');
    }

    if (userTeacher.role != Role.TEACHER) {
      throw new NotFoundException('The user is not a teacher.');
    }

    const course = await this.course.findOne(createSubjectDto.courseId);

    if (!course) {
      throw new NotFoundException('The course does not exist.');
    }

    return await this.prisma.subject.create({ data });
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
      const course = await this.course.findOne(updateSubjectDto.courseId);

      if (!course) {
        throw new NotFoundException('The course does not exist.');
      }
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
}
