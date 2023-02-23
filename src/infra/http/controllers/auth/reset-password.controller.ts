import { ResetPassword } from '@application/use-cases/auth/reset-password';
import { ResetPasswordBodyDto } from '@infra/dtos/auth/reset-password.dto';
import { Controller, Post, HttpCode, Body } from '@nestjs/common';
@Controller('auth')
export class ResetPasswordController {
  constructor(private readonly resetPassword: ResetPassword) {}
  @Post('reset-password')
  @HttpCode(204)
  async execute(@Body() { email, passwordReset, token }: ResetPasswordBodyDto) {
    await this.resetPassword.execute({ email, passwordReset, token });
  }
}
