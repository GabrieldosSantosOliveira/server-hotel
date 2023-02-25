import { FacilitieRepository } from '@application/repositories/facilitie-repository';
import { ImageRepository } from '@application/repositories/image-repository';
import { UserRepository } from '@application/repositories/user-repository';
import { Module } from '@nestjs/common';

import { PrismaFacilitieRepository } from './prisma/prisma-facilitie-repository';
import { PrismaImageRepository } from './prisma/prisma-image-repository';
import { PrismaUserRepository } from './prisma/prisma-user-reporitory';
import { PrismaService } from './prisma/service.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: ImageRepository,
      useClass: PrismaImageRepository,
    },
    {
      provide: FacilitieRepository,
      useClass: PrismaFacilitieRepository,
    },
  ],
  exports: [UserRepository, ImageRepository, FacilitieRepository],
})
export class DatabaseModule {}
