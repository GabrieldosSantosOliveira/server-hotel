import { UserRepository } from '@application/repositories/user-repository';
import { HashComparer } from '@application/services/hash-comparer';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class EmailStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }
  async validate(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid password or email');
    }
    const isValidPassword = await HashComparer.compare(password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password or email');
    }
    return user;
  }
}
