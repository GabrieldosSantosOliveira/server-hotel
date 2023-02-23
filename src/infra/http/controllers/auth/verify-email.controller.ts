import { VerifyEmail } from '@application/use-cases/auth/verify-email';
import { VerifyEmailBodyDto } from '@infra/dtos/auth/verify-email.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class VerifyEmailController {
  constructor(private readonly validateEmail: VerifyEmail) {}

  @Post('verify-email')
  async execute(@Body() { email, token }: VerifyEmailBodyDto) {
    return await this.validateEmail.execute({ email, token });
  }
}
