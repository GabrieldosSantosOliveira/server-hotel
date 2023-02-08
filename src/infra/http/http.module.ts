import { IMailProvider } from '@application/repositories/mail-repository';
import { EmailUserSingUp } from '@application/use-cases/sign-up/email-user-sing-up';
import { GoogleUserSingUp } from '@application/use-cases/sign-up/google-user-sing-up';
import { AuthModule } from '@auth/auth.module';
import { NodeMailerProvider } from '@infra/implementations/mail/nodemalier-provider';
import { HttpModule as HttpModuleAxios } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { EmailSingUpController } from './controllers/Auth/email-sing-up.controller';
import { GoogleSingUpController } from './controllers/Auth/google-sing-up.controller';

@Module({
  imports: [AuthModule, DatabaseModule, HttpModuleAxios],
  controllers: [EmailSingUpController, GoogleSingUpController],
  providers: [
    GoogleUserSingUp,
    EmailUserSingUp,
    {
      provide: IMailProvider,
      useFactory: () => {
        return new NodeMailerProvider({
          transport: {
            host: 'sandbox.smtp.mailtrap.io',
            port: 465,
            secure: false,
            auth: {
              user: '237f6cddc7bd86',
              pass: '5f2205551637fe',
            },
          },
        });
      },
    },
  ],
  exports: [],
})
export class HttpModule {}
