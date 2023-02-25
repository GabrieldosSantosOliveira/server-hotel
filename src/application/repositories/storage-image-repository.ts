export type Response = {
  url: string;
  key: string;
  fileName: string;
};
export type Request = {
  buffer: Buffer;
  fileName: string;
};
export abstract class StorageImageRepository {
  abstract upload(file: Request): Promise<Response>;
}
