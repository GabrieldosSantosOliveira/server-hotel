import {
  IsNotEmpty,
  Length,
  IsEmail,
  IsString,
  Matches,
} from 'class-validator';

export class ResetPasswordBodyDto {
  @IsNotEmpty()
  @Length(6)
  token: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z 0-9]).{8,}$/g)
  passwordReset: string;
}
