import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  description: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsInt()
  teacherId: number;

  @IsInt()
  courseId: number;
}
