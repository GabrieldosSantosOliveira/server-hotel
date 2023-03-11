import { randomUUID } from 'crypto';

import { Address } from './address';
import { DescriptionStill } from './description-still';
import { Facility } from './facility';
import { Image } from './Image';
import { TypeStill } from './TypeStill';
import { User } from './user';

export interface IStillProps {
  id: string;
  title: string;
  price: number;
  type: TypeStill;
  sizePerMeter: number;
  address: Address;
  owner: User;
  facilities: Facility[];
  description: DescriptionStill;
  bedNumber: number;
  bathroomNumber: number;
  images: Image[];
  createdAt: Date;
  updatedAt: Date;
}
interface PropsConstructor
  extends Omit<IStillProps, 'id' | 'createdAt' | 'updatedAt'> {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Still {
  private props: IStillProps;
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
  public set type(type: TypeStill) {
    this.props.type = type;
  }
  public get sizePerMeter() {
    return this.props.sizePerMeter;
  }
  public set sizePerMeter(sizePerMeter: number) {
    this.props.sizePerMeter = sizePerMeter;
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
  public set facilities(facilities: Facility[]) {
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
  public set images(images: Image[]) {
    this.props.images = images;
  }
  public get images(): Image[] | null | undefined {
    return this.props.images;
  }
  public get updatedAt() {
    return this.props.updatedAt;
  }
  public get description() {
    return this.props.description;
  }
  public set description(description: DescriptionStill) {
    this.props.description = description;
  }
  public get bedNumber() {
    return this.props.bedNumber;
  }
  public set bedNumber(bedNumber: number) {
    this.props.bedNumber = bedNumber;
  }
  public get bathroomNumber() {
    return this.props.bathroomNumber;
  }
  public set bathroomNumber(bathroomNumber: number) {
    this.props.bathroomNumber = bathroomNumber;
  }
}
