import { UserRepository } from '@application/repositories/user-repository';
import { HashComparer } from '@application/services/hash-comparer';
import { AuthService } from '@auth/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
interface Request {
  email: string;
  password: string;
}
@Injectable()
export class SingInWithEmailAndPasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}
  async execute({ email, password }: Request) {
    const userExist = await this.userRepository.findByEmail(email);
    if (!userExist) {
      throw new UnauthorizedException('Invalid password or email');
    }
    const isValidPassword = await HashComparer.compare({
      password,
      passwordHash: userExist.password,
    });
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password or email');
    }
    return this.authService.generateAccessTokenAndRefreshToken(userExist);
  }
}
