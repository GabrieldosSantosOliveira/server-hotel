import { randomUUID } from 'crypto';

export interface IImageProps {
  id: string;
  url: string;
  key: string;
  createdAt: Date;
  updatedAt: Date;
}
interface PropsConstructor
  extends Omit<IImageProps, 'createdAt' | 'updatedAt' | 'id'> {
  createdAt?: Date | null;
  updatedAt?: Date | null;
  id?: string | null;
}
export class Image {
  private props: IImageProps;
  constructor({ createdAt, id, updatedAt, ...rest }: PropsConstructor) {
    this.props = {
      id: id || randomUUID(),
      createdAt: createdAt || new Date(),
      updatedAt: updatedAt || new Date(),
      ...rest,
    };
  }
  public get id() {
    return this.props.id;
  }

  public set url(url: string) {
    this.props.url = url;
  }
  public get url() {
    return this.props.url;
  }
  public set key(key: string) {
    this.props.key = key;
  }
  public get key() {
    return this.props.url;
  }
  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
