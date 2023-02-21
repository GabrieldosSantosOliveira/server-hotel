import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
type JwtPayload = {
  sub: string;
  iat: number;
  exp: number;
};
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY_ACCESS_TOKEN,
    });
  }

  async validate(payload: JwtPayload) {
    return payload;
  }
}
