import { Still } from '@application/entities/still';
import { StillRepository } from '@application/repositories/still-repository';
import { Injectable } from '@nestjs/common';

import { PrismaStillMapper } from '../mappers/prisma-still-mapper';
import { PrismaService } from './service.service';
@Injectable()
export class PrismaStillRepository implements StillRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(still: Still): Promise<any> {
    return PrismaStillMapper.toPrisma(still);
  }
}
