import {
  Request,
  Response,
  StorageImageRepository,
} from '@application/repositories/storage-image-repository';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { randomUUID } from 'crypto';

@Injectable()
export class StorageImageProvider implements StorageImageRepository {
  async upload({ buffer, fileName }: Request): Promise<Response> {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Body: buffer,
        Key: `${randomUUID()}-${fileName}`,
        Bucket: process.env.AWS_BUCKET_NAME,
      })
      .promise();
    return {
      fileName,
      key: uploadResult.Key,
      url: uploadResult.Location,
    };
  }
}
