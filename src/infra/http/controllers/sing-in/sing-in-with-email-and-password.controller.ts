import { SingInWithEmailAndPasswordUseCase } from '@application/use-cases/sing-in/sing-in-with-email-and-password-use-case';
import { SingUpWithEmailAndPasswordDto } from '@infra/dtos/sing-in/sing-in-with-email-and-password-dto';
import { Body, Controller, Post } from '@nestjs/common';
@Controller('auth')
export class SingUpWithEmailAndPasswordController {
  constructor(
    private readonly singUpWithEmailAndPasswordUseCase: SingInWithEmailAndPasswordUseCase,
  ) {}
  @Post('sing-in-with-email-and-password')
  async execute(@Body() { email, password }: SingUpWithEmailAndPasswordDto) {
    return await this.singUpWithEmailAndPasswordUseCase.execute({
      email,
      password,
    });
  }
}
