import { GoogleUserSingUp } from '@application/use-cases/sign-up/google-user-sing-up';
import { CreateUserBodyGoogleProvider } from '@infra/dtos/SingUp/create-user-body-google-provider';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class GoogleSingUpController {
  constructor(private readonly googleUserSingUp: GoogleUserSingUp) {}

  @Post('google')
  async createUserWithGoogle(@Body() body: CreateUserBodyGoogleProvider) {
    return await this.googleUserSingUp.execute(body.access_token);
  }
}
