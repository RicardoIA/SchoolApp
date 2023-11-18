import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { SubjectModule } from 'src/subject/subject.module';
import { TaskModule } from 'src/task/task.module';
import { DocumentModule } from 'src/document/document.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    SubjectModule,
    DocumentModule,
    TaskModule,
  ],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule {}
