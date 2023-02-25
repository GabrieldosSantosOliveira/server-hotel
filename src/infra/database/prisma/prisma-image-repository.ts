import { ImageRepository } from '@application/repositories/image-repository';
import { Injectable } from '@nestjs/common';
import { Image } from '@prisma/client';

import { PrismaService } from './service.service';
@Injectable()
export class PrismaImageRepository implements ImageRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(image: Image): Promise<Image> {
    return await this.prismaService.image.create({
      data: image,
    });
  }
}
