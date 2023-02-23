import { IsNotEmpty } from 'class-validator';
export class CreateUserGoogleProviderBodyDto {
  @IsNotEmpty()
  access_token: string;
}
