import { Facility } from '@application/entities/facility';
import { FacilityRepository } from '@application/repositories/facility-repository';
import { Injectable } from '@nestjs/common';

import { PrismaFacilityMapper } from '../mappers/prisma-facility-mapper';
import { PrismaService } from './service.service';
@Injectable()
export class PrismaFacilityRepository implements FacilityRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findByName(name: string): Promise<Facility | null | undefined> {
    const raw = await this.prismaService.facility.findUnique({
      where: {
        name,
      },
    });
    if (!raw) return null;
    return PrismaFacilityMapper.toDomain(raw);
  }
  async create(facility: Facility): Promise<void> {
    const raw = PrismaFacilityMapper.toPrisma(facility);
    await this.prismaService.facility.create({
      data: raw,
    });
  }
}
