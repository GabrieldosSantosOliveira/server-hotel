import { CompleteSingUpWithEmail } from '@application/use-cases/sign-up/complete-sing-up-with-email';
import { AuthService } from '@auth/auth.service';
import { CompleteSingUpWithEmailDto } from '@infra/dtos/SingUp/complete-sing-up-with-email';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class CompleteSingUpWithEmailController {
  constructor(
    private readonly completeSingUpWithEmail: CompleteSingUpWithEmail,
    private readonly authService: AuthService,
  ) {}

  @Post('complete-sing-up-with-email')
  async validateEmail(
    @Body()
    { email, familyName, givenName, birthDate }: CompleteSingUpWithEmailDto,
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
