import { Email } from '@application/entities/Email';
import { Providers } from '@application/entities/Providers';
import { User } from '@application/entities/User';
import { UserRepository } from '@application/repositories/user-repository';
import { AuthService } from '@auth/auth.service';
import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
interface GoogleUser {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}
@Injectable()
export class GoogleUserSingUp {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly http: HttpService,
    private readonly authService: AuthService,
  ) {}
  async execute(access_token: string) {
    try {
      const { data: googleUser } = await this.getFetchUserGoogle(access_token);
      const userExists = await this.userRepository.findByEmailAndGoogleId({
        email: googleUser.email,
        googleId: googleUser.id,
      });
      if (userExists) {
        return this.authService.generateAccessTokenAndRefreshToken(userExists);
      }
      const userDomain = new User({
        email: Email.create(googleUser.email),
        familyName: googleUser.family_name,
        givenName: googleUser.given_name,
        providers: new Providers({
          googleId: googleUser.id,
        }),
        verifiedEmail: googleUser.verified_email,
        isCompleteRegister: true,
      });
      await this.userRepository.create(userDomain);
      return this.authService.generateAccessTokenAndRefreshToken(userDomain);
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
  private async getFetchUserGoogle(access_token: string) {
    try {
      return await lastValueFrom(
        this.http.get<GoogleUser>(
          'https://www.googleapis.com/oauth2/v2/userinfo',
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        ),
      );
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
