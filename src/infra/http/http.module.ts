import { IMailProvider } from '@application/repositories/mail-repository';
import { RefreshTokenUseCase } from '@application/use-cases/auth/refresh-token';
import { ValidateEmailUseCase } from '@application/use-cases/auth/validate-email';
import { CompleteSingUpWithEmail } from '@application/use-cases/sign-up/complete-sing-up-with-email';
import { EmailUserSingUp } from '@application/use-cases/sign-up/email-user-sing-up';
import { GoogleUserSingUp } from '@application/use-cases/sign-up/google-user-sing-up';
import { SingInWithEmailAndPasswordUseCase } from '@application/use-cases/sing-in/sing-in-with-email-and-password-use-case';
import { GetProfileUserUseCase } from '@application/use-cases/user/get-profile-user-use-case';
import { AuthModule } from '@auth/auth.module';
import { NodeMailerProvider } from '@infra/implementations/mail/nodemalier-provider';
import { HttpModule as HttpModuleAxios } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { RefreshTokenController } from './controllers/auth/refresh-token.controller';
import { ValidateEmailController } from './controllers/auth/validate-email.controller';
import { SingUpWithEmailAndPasswordController } from './controllers/sing-in/sing-in-with-email-and-password.controller';
import { CompleteSingUpWithEmailController } from './controllers/sing-up/complete-sing-up-with-email.controller';
import { EmailSingUpController } from './controllers/sing-up/email-sing-up.controller';
import { GoogleSingUpController } from './controllers/sing-up/google-sing-up.controller';
import { GetProfileUserController } from './controllers/user/get-profile-user.controller';

@Module({
  imports: [AuthModule, DatabaseModule, HttpModuleAxios],
  controllers: [
    EmailSingUpController,
    GoogleSingUpController,
    ValidateEmailController,
    CompleteSingUpWithEmailController,
    GetProfileUserController,
    RefreshTokenController,
    SingUpWithEmailAndPasswordController,
  ],
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
    ValidateEmailUseCase,
    CompleteSingUpWithEmail,
    GetProfileUserUseCase,
    RefreshTokenUseCase,
    SingInWithEmailAndPasswordUseCase,
  ],
  exports: [],
})
export class HttpModule {}
