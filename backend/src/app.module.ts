import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CourseModule } from './course/course.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { SubjectModule } from './subject/subject.module';
import { DocumentModule } from './document/document.module';
import { TaskModule } from './task/task.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, CourseModule, SubjectModule, DocumentModule, TaskModule, ClassModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
