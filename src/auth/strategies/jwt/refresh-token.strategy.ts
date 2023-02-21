import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
type JwtPayload = {
  sub: string;
  iat: number;
  exp: number;
};
@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY_REFRESH_TOKEN,
    });
  }

  async validate(payload: JwtPayload) {
    return payload;
  }
}
