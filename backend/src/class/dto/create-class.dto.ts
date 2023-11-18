import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClassDto {
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  description: string;

  @IsInt()
  teacherId: number;

  @IsInt()
  subjectId: number;

  @IsOptional()
  @IsInt()
  documentId: number;

  @IsOptional()
  @IsInt()
  taskId: number;

  @IsDateString()
  onDate: Date;
}
