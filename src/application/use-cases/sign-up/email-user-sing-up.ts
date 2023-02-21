import { Email } from '@application/entities/Email';
import { Password } from '@application/entities/Password';
import { Providers } from '@application/entities/Providers';
import { IMailProvider } from '@application/repositories/mail-repository';
import { UserRepository } from '@application/repositories/user-repository';
import { generateRandomNumber } from '@application/services/generate-random-number';
import { ConflictException, Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

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
      if (!user.isCompleteRegister) {
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
        return user;
      } else {
        throw new ConflictException('User already exists');
      }
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
      validEmailToken: generateRandomNumber({
        max: 999999,
        min: 100000,
      }).toString(),
    });

    await this.userRepository.create(userDomain);
    await this.mailProvider.sendEmail({
      body: `<div><a href="https://validate-email-iota.vercel.app/g">Usuario</a> token: ${userDomain.validEmailToken} </div>`,
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
