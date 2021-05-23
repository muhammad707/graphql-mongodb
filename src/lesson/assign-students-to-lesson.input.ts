import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AssignStudentsToLessonInput {
  @Field((type) => ID)
  lessonId: string;

  @Field((type) => [ID])
  studentIds: string[];
}
