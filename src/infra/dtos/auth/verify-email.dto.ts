import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class VerifyEmailBodyDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  token: string;
}
