import { User } from '@application/entities/User';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  generateToken(user: User) {
    const token = this.jwtService.sign({ sub: user.id });
    return { access_token: token };
  }
}
