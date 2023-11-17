import { Role } from '@prisma/client';

export class User {
  id?: number;
  email: string;
  password: string;
  name: string;
  role: Role;
  phone?: string;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  createAt?: Date;
}
