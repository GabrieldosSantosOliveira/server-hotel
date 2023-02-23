import { GoogleUserSingUp } from '@application/use-cases/sign-up/google-user-sing-up';
import { CreateUserGoogleProviderBodyDto } from '@infra/dtos/sing-up/create-user-body-google-provider.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class GoogleSingUpController {
  constructor(private readonly googleUserSingUp: GoogleUserSingUp) {}

  @Post('google')
  async execute(@Body() body: CreateUserGoogleProviderBodyDto) {
    return await this.googleUserSingUp.execute(body.access_token);
  }
}
