import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt/jwt.strategy';
import { EmailStrategy } from './strategies/local/email.strategy';
@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: 'jjjj',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, EmailStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
