import { ValidateEmailUseCase } from '@application/use-cases/auth/validate-email';
import { ValidateEmail } from '@infra/dtos/SingUp/validate-email';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class ValidateEmailController {
  constructor(private readonly validateEmailUseCase: ValidateEmailUseCase) {}

  @Post('validate-email')
  async validateEmail(@Body() { email, token }: ValidateEmail) {
    return await this.validateEmailUseCase.execute({ email, token });
  }
}
