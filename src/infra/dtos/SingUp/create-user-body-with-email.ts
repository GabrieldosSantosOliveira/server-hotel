import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserBodyWithEmail {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password: string;
}
