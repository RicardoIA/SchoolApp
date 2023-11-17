import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  description: string;
}
