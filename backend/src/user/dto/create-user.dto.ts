import { Role } from '@prisma/client';
import { User } from '../entities/user.entity';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9 ]+$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name: string;

  @IsString()
  role: Role;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  cep: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  street: string;

  @IsOptional()
  @IsString()
  number: string;
}
