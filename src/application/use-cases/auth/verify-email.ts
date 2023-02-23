import { IMailProvider } from '@application/repositories/mail-repository';
import { UserRepository } from '@application/repositories/user-repository';
import { generateRandomNumber } from '@application/services/generate-random-number';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as dayjs from 'dayjs';

type RequestValidateEmail = {
  email: string;
  token: string;
};
@Injectable()
export class VerifyEmail {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly mailProvider: IMailProvider,
  ) {}
  async execute({ email, token }: RequestValidateEmail): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not exists');
    }
    if (user.validEmailToken !== token) {
      throw new UnauthorizedException('Token invalid');
    }
    if (dayjs().isAfter(user.validEmailExpires)) {
      user.validEmailExpires = dayjs().add(1, 'hour').toDate();
      user.validEmailToken = generateRandomNumber({
        max: 999999,
        min: 100000,
      }).toString();
      await this.userRepository.save(user);
      await this.mailProvider.sendEmail({
        body: `<div><a href="https://validate-email-iota.vercel.app/g">Usuario</a> token: ${user.validEmailToken} </div>`,
        subject: 'Usuário criado com sucesso',
        to: email,
        from: {
          name: 'Equipe de suporte',
          email: 'no_reply@reasa.com.br',
        },
      });
      throw new UnauthorizedException('Token expired');
    }
    user.verifiedEmail = true;
    await this.userRepository.save(user);
    return true;
  }
}
