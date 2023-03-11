import { Image } from '@application/entities/image';

export class ImageViewModel {
  static toHTTP(image: Image) {
    return {
      id: image.id,
      url: image.url,
      key: image.key,
      createdAt: image.createdAt,
      updatedAt: image.updatedAt,
    };
  }
}
