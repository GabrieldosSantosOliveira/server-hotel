import { IsNotEmpty } from 'class-validator';
export class CreateUserBodyGoogleProvider {
  @IsNotEmpty()
  access_token: string;
}
