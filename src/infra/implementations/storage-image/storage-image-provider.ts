import { Image } from '@application/entities/image';
import {
  RequestFileSave,
  StorageImageRepository,
} from '@application/repositories/storage-image-repository';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { randomUUID } from 'crypto';
@Injectable()
export class StorageImageProvider implements StorageImageRepository {
  async upload({ buffer, fileName }: RequestFileSave): Promise<Image> {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Body: buffer,
        Key: `${randomUUID()}-${fileName}`,
        Bucket: process.env.AWS_BUCKET_NAME,
      })
      .promise();
    return new Image({
      key: uploadResult.Key,
      url: uploadResult.Location,
    });
  }
}
