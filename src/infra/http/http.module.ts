import { HttpModule as HttpModuleAxios } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/Create-user';

import { DatabaseModule } from '../database/database.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [DatabaseModule, HttpModuleAxios],
  controllers: [UserController],
  providers: [CreateUserUseCase],
  exports: [],
})
export class HttpModule {}
