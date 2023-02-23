import { ForgotPassword } from '@application/use-cases/auth/forgot-password';
import { ForgotPasswordBodyDto } from '@infra/dtos/auth/forgot-password.dto';
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
@Controller('auth')
export class ForgotPasswordController {
  constructor(private readonly forgotPassword: ForgotPassword) {}
  @Post('forgot-password')
  @HttpCode(204)
  async execute(@Body() { email }: ForgotPasswordBodyDto) {
    await this.forgotPassword.execute({ email });
  }
}
