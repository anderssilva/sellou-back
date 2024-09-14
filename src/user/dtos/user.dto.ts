import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Matches, MinLength } from "class-validator";
import { Column } from "sequelize-typescript";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
  @IsEmail({}, { message: 'Email no formato inválido' })
  email: string;

  @IsNotEmpty()
  phone: number;

  @IsString()
  city?: string;

  @IsString()
  state?: string;

  @IsNotEmpty({ message: 'O campo senha não pode estar vazio' })
  @IsString()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @Matches(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
  @Matches(/[a-z]/, { message: 'A senha deve conter pelo menos uma letra minúscula' })
  @Matches(/\d/, { message: 'A senha deve conter pelo menos um número' })
  @Matches(/[\W_]/, { message: 'A senha deve conter pelo menos um caractere especial' })
  password: string;

  @IsNotEmpty()
  idRole?: number;

  @IsInt()
  @IsOptional()
  accessAmount: number = 1;

  @Column
  company: number;
}
