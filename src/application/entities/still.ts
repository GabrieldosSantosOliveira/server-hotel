import { randomUUID } from 'crypto';

import { Address } from './address';
import { Facilitie } from './Facilitie';
import { Image } from './Image';
import { User } from './user';

interface Props {
  id: string;
  title: string;
  price: number;
  type: string;
  size: number;
  address: Address;
  owner: User;
  facilities: Facilitie;
  image?: Image;
  createdAt: Date;
  updatedAt: Date;
}
interface PropsConstructor
  extends Omit<Props, 'id' | 'createdAt' | 'updatedAt'> {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Still {
  private props: Props;
  constructor({ id, createdAt, updatedAt, ...rest }: PropsConstructor) {
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

  public set title(title: string) {
    this.props.title = title;
  }
  public get title() {
    return this.props.title;
  }

  public get price() {
    return this.props.price;
  }
  public set price(price: number) {
    this.props.price = price;
  }
  public get type() {
    return this.props.type;
  }
  public set type(type: string) {
    this.props.type = type;
  }
  public get size() {
    return this.props.size;
  }
  public set size(size: number) {
    this.props.size = size;
  }
  public get address() {
    return this.props.address;
  }
  public set address(address: Address) {
    this.props.address = address;
  }
  public get facilities() {
    return this.props.facilities;
  }
  public set facilities(facilities: Facilitie) {
    this.props.facilities = facilities;
  }
  public get owner() {
    return this.props.owner;
  }
  public set owner(owner: User) {
    this.props.owner = owner;
  }
  public get createdAt() {
    return this.props.createdAt;
  }
  public set image(image: Image) {
    this.props.image = image;
  }
  public get image(): Image | null | undefined {
    return this.props.image;
  }
  public get updatedAt() {
    return this.props.updatedAt;
  }
}
