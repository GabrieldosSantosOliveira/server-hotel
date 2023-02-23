import { SingInWithEmailAndPassword } from '@application/use-cases/sing-in/sing-in-with-email-and-password-use-case';
import { SingUpWithEmailAndPasswordBodyDto } from '@infra/dtos/sing-in/sing-in-with-email-and-password.dto';
import { Body, Controller, Post } from '@nestjs/common';
@Controller('auth')
export class SingUpWithEmailAndPasswordController {
  constructor(
    private readonly singUpWithEmailAndPassword: SingInWithEmailAndPassword,
  ) {}
  @Post('sing-in-with-email-and-password')
  async execute(
    @Body() { email, password }: SingUpWithEmailAndPasswordBodyDto,
  ) {
    return await this.singUpWithEmailAndPassword.execute({
      email,
      password,
    });
  }
}
