import { Image as RawImage } from '@prisma/client';
export abstract class ImageRepository {
  abstract create(image: RawImage): Promise<RawImage>;
}
