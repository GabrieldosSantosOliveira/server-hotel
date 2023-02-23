import { Password } from '@application/entities/Password';
import { UserRepository } from '@application/repositories/user-repository';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as dayjs from 'dayjs';
interface Request {
  token: string;
  email: string;
  passwordReset: string;
}
@Injectable()
export class ResetPasswordUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute({ email, passwordReset, token }: Request) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.passwordResetToken !== token) {
      throw new UnauthorizedException('Token invalid');
    }
    if (dayjs().isAfter(user.passwordResetExpires)) {
      throw new UnauthorizedException('Token expired');
    }
    user.password = Password.create(passwordReset).password;
    await this.userRepository.save(user);
  }
}
