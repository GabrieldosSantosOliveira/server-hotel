import { IsNotEmpty, IsString } from 'class-validator';

export class SingUpWithEmailAndPasswordDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
