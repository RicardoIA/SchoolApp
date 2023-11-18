import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [PrismaModule, UserModule, CourseModule],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [SubjectService],
})
export class SubjectModule {}
