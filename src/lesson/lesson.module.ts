import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonResolver } from './lesson.resolver';

@Module({
  providers: [LessonResolver, LessonService],
  imports: [TypeOrmModule.forFeature([Lesson])],
})
export class LessonModule {}
