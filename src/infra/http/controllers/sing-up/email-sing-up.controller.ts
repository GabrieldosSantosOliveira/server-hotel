import { EmailUserSingUp } from '@application/use-cases/sign-up/email-user-sing-up';
import { CreateUserWithEmailBodyDto } from '@infra/dtos/sing-up/create-user-body-with-email.dto';
import { Controller, Post, Body } from '@nestjs/common';

import { UserViewModel } from '../../view-models/user-view-model';

@Controller('auth')
export class EmailSingUpController {
  constructor(private readonly emailUserSingUp: EmailUserSingUp) {}

  @Post('email')
  async execute(@Body() { email, password }: CreateUserWithEmailBodyDto) {
    const user = await this.emailUserSingUp.execute({ email, password });
    return UserViewModel.toHTTP(user);
  }
}
