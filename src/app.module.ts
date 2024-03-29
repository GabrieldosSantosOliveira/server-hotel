import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
