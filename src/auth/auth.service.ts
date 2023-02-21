import { User } from '@application/entities/User';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateAccessToken(user: User) {
    const token = this.jwtService.sign(
      { sub: user.id },
      { secret: process.env.SECRET_KEY_ACCESS_TOKEN, expiresIn: 60 },
    );
    return { access_token: token };
  }
  generateRefreshToken(user: User) {
    const token = this.jwtService.sign(
      { sub: user.id },
      {
        expiresIn: 30 * 24 * 60 * 60,
        secret: process.env.SECRET_KEY_REFRESH_TOKEN,
      },
    );
    return { refresh_token: token };
  }
  generateAccessTokenAndRefreshToken(user: User) {
    const { access_token } = this.generateAccessToken(user);
    const { refresh_token } = this.generateRefreshToken(user);
    return { access_token, refresh_token };
  }
}
