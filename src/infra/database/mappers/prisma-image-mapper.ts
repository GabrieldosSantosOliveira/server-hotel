import { Image } from '@application/entities/image';
import { Image as RawImage } from '@prisma/client';
export class PrismaImageMapper {
  static toPrisma(image: Image): RawImage {
    return {
      id: image.id,
      key: image.id,
      url: image.url,
      createdAt: image.createdAt,
      updatedAt: image.updatedAt,
      stillId: null,
      userId: null,
    };
  }
  static toDomain(rawImage: RawImage): Image {
    return new Image({
      key: rawImage.key,
      url: rawImage.url,
      createdAt: rawImage.createdAt,
      id: rawImage.id,
      updatedAt: rawImage.updatedAt,
    });
  }
}
