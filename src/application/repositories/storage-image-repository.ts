import { Image } from '@application/entities/image';
export type RequestFileSave = {
  buffer: Buffer;
  fileName: string;
};
export abstract class StorageImageRepository {
  abstract upload(file: RequestFileSave): Promise<Image>;
}
