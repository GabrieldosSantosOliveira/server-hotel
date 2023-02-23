import { CompleteSingUpWithEmail } from '@application/use-cases/sign-up/complete-sing-up-with-email';
import { AuthService } from '@auth/auth.service';
import { CompleteSingUpWithEmailBodyDto } from '@infra/dtos/sing-up/complete-sing-up-with-email.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class CompleteSingUpWithEmailController {
  constructor(
    private readonly completeSingUpWithEmail: CompleteSingUpWithEmail,
    private readonly authService: AuthService,
  ) {}

  @Post('complete-sing-up-with-email')
  async execute(
    @Body()
    { email, familyName, givenName, birthDate }: CompleteSingUpWithEmailBodyDto,
  ) {
    const user = await this.completeSingUpWithEmail.execute({
      email,
      familyName,
      givenName,
      birthDate,
    });
    return this.authService.generateAccessTokenAndRefreshToken(user);
  }
}
