import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { start } from 'repl';
import { CreateLessonInput } from './lesson.input';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => [LessonType])
  lesson() {
    return this.lessonService.getLessons();
  }

  @Query((returns) => LessonType)
  lessonById(@Args('id') id: string) {
    return this.lessonService.lessonById(id);
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
