import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  description: string;

  @IsString()
  @MinLength(4)
  @MaxLength(1000)
  content: string;

  @IsInt()
  subjectId: number;

  @IsInt()
  authorId: number;
}
