import { Image } from '@application/entities/image';
export abstract class ImageRepository {
  abstract create(image: Image): Promise<void>;
  abstract createMany(images: Image[]): Promise<void>;
}
