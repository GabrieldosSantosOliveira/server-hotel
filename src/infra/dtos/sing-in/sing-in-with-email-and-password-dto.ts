import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class SingUpWithEmailAndPasswordDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z 0-9]).{8,}$/g)
  password: string;
}
