import { FacilityRepository } from '@application/repositories/facility-repository';
import { ImageRepository } from '@application/repositories/image-repository';
import { StillRepository } from '@application/repositories/still-repository';
import { UserRepository } from '@application/repositories/user-repository';
import { Module } from '@nestjs/common';

import { PrismaFacilityRepository } from './prisma/prisma-facility-repository';
import { PrismaImageRepository } from './prisma/prisma-image-repository';
import { PrismaStillRepository } from './prisma/prisma-still-repository';
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
      provide: FacilityRepository,
      useClass: PrismaFacilityRepository,
    },
    {
      provide: StillRepository,
      useClass: PrismaStillRepository,
    },
  ],
  exports: [
    UserRepository,
    ImageRepository,
    FacilityRepository,
    StillRepository,
  ],
})
export class DatabaseModule {}
