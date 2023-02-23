import { IMailProvider } from '@application/repositories/mail-repository';
import { UserRepository } from '@application/repositories/user-repository';
import { generateRandomNumber } from '@application/services/generate-random-number';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as dayjs from 'dayjs';
interface Request {
  email: string;
}
@Injectable()
export class ForgotPasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly mailProvider: IMailProvider,
  ) {}
  async execute({ email }: Request) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.passwordResetToken = generateRandomNumber({
      max: 999999,
      min: 100000,
    }).toString();
    user.passwordResetExpires = dayjs().add(1, 'hour').toDate();
    await this.userRepository.save(user);
    await this.mailProvider.sendEmail({
      body: `Token para alterar a senha: ${user.passwordResetToken} </div>`,
      subject: 'Esqueceu a senha',
      to: email,
      from: {
        name: 'Equipe de suporte',
        email: 'no_reply@reasa.com.br',
      },
    });
  }
}
