import { UserRepository } from '@application/repositories/user-repository';
import { Module } from '@nestjs/common';

import { PrismaUserRepository } from './prisma/prisma-user-reporitory';
import { PrismaService } from './prisma/service.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
