import { ImageRepository } from '@application/repositories/image-repository';
import {
  Request,
  StorageImageRepository,
} from '@application/repositories/storage-image-repository';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
interface RequestStillCreate extends Request {
  stillId: string;
}
@Injectable()
export class UploadImageStill {
  constructor(
    private readonly imageRepository: ImageRepository,
    private readonly storageImageRepository: StorageImageRepository,
  ) {}
  async execute({ buffer, fileName, stillId }: RequestStillCreate) {
    const uploadFile = await this.storageImageRepository.upload({
      buffer,
      fileName,
    });
    return await this.imageRepository.create({
      id: randomUUID(),
      createdAt: new Date(),
      key: uploadFile.key,
      stillId: null,
      updatedAt: new Date(),
      url: uploadFile.url,
      userId: stillId,
    });
  }
}
