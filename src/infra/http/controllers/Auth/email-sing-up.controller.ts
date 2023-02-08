import { EmailUserSingUp } from '@application/use-cases/sign-up/email-user-sing-up';
import { CreateUserBodyWithEmail } from '@infra/dtos/SingUp/create-user-body-with-email';
import { Controller, Post, Body } from '@nestjs/common';

import { UserViewModel } from '../../view-models/user-view-model';

@Controller('auth')
export class EmailSingUpController {
  constructor(private readonly emailUserSingUp: EmailUserSingUp) {}

  @Post('email')
  async createUserWithEmail(
    @Body() { email, password }: CreateUserBodyWithEmail,
  ) {
    const user = await this.emailUserSingUp.execute({ email, password });
    return UserViewModel.toHTTP(user);
  }
}
