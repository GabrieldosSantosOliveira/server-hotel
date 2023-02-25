import { Facilitie } from '@application/entities/Facilitie';
import { FacilitieRepository } from '@application/repositories/facilitie-repository';
import { Injectable } from '@nestjs/common';

import { PrismaFacilitieMapper } from '../mappers/prisma-facilitie-mapper';
import { PrismaService } from './service.service';
@Injectable()
export class PrismaFacilitieRepository implements FacilitieRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(facilitie: Facilitie): Promise<void> {
    const raw = PrismaFacilitieMapper.toPrisma(facilitie);
    await this.prismaService.facilitie.create({
      data: raw,
    });
  }
}
