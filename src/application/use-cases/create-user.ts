import { HttpService } from '@nestjs/axios';
import { Injectable, ConflictException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

import { Email } from '../entities/Email';
import { Providers } from '../entities/Providers';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/user-repository';
interface GoogleUserResponse {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}
@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly http: HttpService,
  ) {}
  async execute(access_token: string): Promise<User> {
    const { data: userDataGoogle } = await lastValueFrom(
      this.http.get<GoogleUserResponse>(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      ),
    );
    const exists = await this.userRepository.findByEmail(userDataGoogle.email);
    if (exists) {
      throw new ConflictException('User already exists');
    }
    const user = new User({
      email: Email.create(userDataGoogle.email),
      familyName: userDataGoogle.family_name,
      givenName: userDataGoogle.given_name,
      verifiedEmail: userDataGoogle.verified_email,
      providers: new Providers({
        googleId: userDataGoogle.id,
      }),
    });
    await this.userRepository.create(user);
    return user;
  }
}
