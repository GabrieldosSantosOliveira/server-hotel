import { UserRepository } from '@application/repositories/user-repository';
import { AuthService } from '@auth/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
type Request = {
  userId: string;
};
@Injectable()
export class RefreshTokenUseCase {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  async execute({ userId }: Request) {
    const userExist = await this.userRepository.findById(userId);
    if (!userExist) {
      throw new UnauthorizedException();
    }
    return this.authService.generateAccessToken(userExist);
  }
}
