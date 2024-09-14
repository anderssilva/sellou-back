import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class AuthLoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Email no formato inválido' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  password: string;
}

/* import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class AuthLoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Email no formato inválido' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @Matches(/[A-Z]/, { message: 'A senha deve conter pelo menos uma letra maiúscula' })
  @Matches(/[a-z]/, { message: 'A senha deve conter pelo menos uma letra minúscula' })
  @Matches(/\d/, { message: 'A senha deve conter pelo menos um número' })
  @Matches(/[\W_]/, { message: 'A senha deve conter pelo menos um caractere especial' })
  password: string;
}

*/
