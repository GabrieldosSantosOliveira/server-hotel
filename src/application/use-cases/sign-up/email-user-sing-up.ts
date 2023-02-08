import { Email } from '@application/entities/Email';
import { Password } from '@application/entities/Password';
import { Providers } from '@application/entities/Providers';
import { IMailProvider } from '@application/repositories/mail-repository';
import { UserRepository } from '@application/repositories/user-repository';
import { ConflictException, Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { randomUUID } from 'node:crypto';

import { User } from '../../entities/User';
type RequestEmailUserSingUp = {
  email: string;
  password: string;
};
@Injectable()
export class EmailUserSingUp {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly mailProvider: IMailProvider,
  ) {}
  async execute({ email, password }: RequestEmailUserSingUp): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      throw new ConflictException('User already exists');
    }
    const userDomain = new User({
      email: Email.create(email),
      password: Password.create(password).password,
      familyName: '',
      givenName: '',
      providers: new Providers({}),
      verifiedEmail: false,
      isCompleteRegister: false,
      validEmailExpires: dayjs().add(1, 'hour').toDate(),
      validEmailToken: randomUUID(),
    });

    await this.userRepository.create(userDomain);
    await this.mailProvider.sendEmail({
      body: '<a href="https://google.com.br">Usuario</a>',
      subject: 'Usuário criado com sucesso',
      to: email,
      from: {
        name: 'Equipe de suporte',
        email: 'no_reply@reasa.com.br',
      },
    });
    return userDomain;
  }
}
