import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ValidateEmail {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  token: string;
}
