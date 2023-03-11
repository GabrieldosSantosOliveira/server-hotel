import { Still } from '@application/entities/still';
import { StillRepository } from '@application/repositories/still-repository';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { PrismaStillMapper } from '../mappers/prisma-still-mapper';
import { PrismaService } from './service.service';
@Injectable()
export class PrismaStillRepository implements StillRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(still: Still): Promise<void> {
    const {
      still: rawStill,
      address,
      images,
      owner,
      facilities,
    } = PrismaStillMapper.toPrisma(still);
    await this.prismaService.still.create({
      data: {
        ...rawStill,
        ownerId: owner.id,
        Image: {
          connect: images.map((image) => {
            return { id: image.id };
          }),
        },
        Address: {
          create: address,
        },
      },
    });
    await this.prismaService.stillFacility.createMany({
      data: facilities.map((facility) => {
        return { facilityId: facility.id, stillId: still.id, id: randomUUID() };
      }),
    });
  }
}
