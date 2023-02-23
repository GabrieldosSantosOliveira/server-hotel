import { ForgotPasswordUseCase } from '@application/use-cases/auth/forgot-password-use-case';
import { ForgotPasswordDto } from '@infra/dtos/auth/forgot-password.dto';
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
@Controller('auth')
export class ForgotPasswordController {
  constructor(private readonly forgotPasswordUseCase: ForgotPasswordUseCase) {}
  @Post('forgot-password')
  @HttpCode(204)
  async execute(@Body() { email }: ForgotPasswordDto) {
    await this.forgotPasswordUseCase.execute({ email });
  }
}
