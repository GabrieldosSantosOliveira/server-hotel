import { IsEmail, IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CompleteSingUpWithEmailDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  givenName: string;
  @IsNotEmpty()
  @IsString()
  familyName: string;
  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;
}
