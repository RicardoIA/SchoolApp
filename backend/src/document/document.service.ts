import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectService } from 'src/subject/subject.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class DocumentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly user: UserService,
    private readonly subject: SubjectService,
  ) {}

  async create(createDocumentDto: CreateDocumentDto) {
    if (createDocumentDto.authorId) {
      await this.user.isTeacher(createDocumentDto.authorId);
    }

    if (createDocumentDto.subjectId) {
      await this.subject.isExist(createDocumentDto.subjectId);
    }

    return await this.prisma.document.create({ data: createDocumentDto });
  }

  async findAll() {
    return await this.prisma.document.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.document.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    if (updateDocumentDto.authorId) {
      await this.user.isTeacher(updateDocumentDto.authorId);
    }

    if (updateDocumentDto.subjectId) {
      await this.subject.isExist(updateDocumentDto.subjectId);
    }

    return await this.prisma.document.update({
      where: { id },
      data: {
        ...updateDocumentDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.document.delete({
      where: { id },
    });
  }

  async isExist(id: number) {
    const document = await this.findOne(id);

    if (!document) {
      throw new NotFoundException('The document does not exist.');
    }
  }
}
