import { Image } from '@application/entities/image';
import { ImageRepository } from '@application/repositories/image-repository';
import { Injectable } from '@nestjs/common';

import { PrismaImageMapper } from '../mappers/prisma-image-mapper';
import { PrismaService } from './service.service';
@Injectable()
export class PrismaImageRepository implements ImageRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async createMany(images: Image[]): Promise<void> {
    const raws = images.map((image) => {
      return PrismaImageMapper.toPrisma(image);
    });
    await this.prismaService.image.createMany({
      data: raws,
    });
  }
  async create(image: Image): Promise<void> {
    const raw = PrismaImageMapper.toPrisma(image);
    await this.prismaService.image.create({
      data: raw,
    });
  }
}
