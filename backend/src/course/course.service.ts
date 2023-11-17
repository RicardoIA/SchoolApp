import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    const data = {
      ...createCourseDto,
    };

    return await this.prisma.course.create({ data });
  }

  async findAll() {
    return await this.prisma.course.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.course.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.prisma.course.update({
      where: { id },
      data: {
        ...updateCourseDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.course.delete({
      where: { id },
    });
  }
}
