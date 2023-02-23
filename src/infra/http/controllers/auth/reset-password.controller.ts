import { ResetPasswordUseCase } from '@application/use-cases/auth/reset-password-use-case';
import { ResetPasswordDto } from '@infra/dtos/auth/reset-password.dto';
import { Controller, Post, HttpCode, Body } from '@nestjs/common';
@Controller('auth')
export class ResetPasswordController {
  constructor(private readonly resetPasswordUseCase: ResetPasswordUseCase) {}
  @Post('reset-password')
  @HttpCode(204)
  async execute(@Body() { email, passwordReset, token }: ResetPasswordDto) {
    await this.resetPasswordUseCase.execute({ email, passwordReset, token });
  }
}
