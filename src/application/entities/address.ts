import { randomUUID } from 'crypto';

export interface IAddressProps {
  id: string;
  numberOfStill: string;
  street: string;
  complement?: string;
  referencePoint?: string;
  city: string;
  state: string;
  zipCode: string;
  district: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}
interface PropsConstructor
  extends Omit<
    IAddressProps,
    'id' | 'referencePoint' | 'createdAt' | 'updatedAt'
  > {
  id?: string | null;
  referencePoint?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export class Address {
  private props: IAddressProps;
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
  public get numberOfStill() {
    return this.props.numberOfStill;
  }
  public set numberOfStill(numberOfStill: string) {
    this.props.numberOfStill = numberOfStill;
  }
  public get street() {
    return this.props.street;
  }
  public set street(street: string) {
    this.props.street = street;
  }
  public get complement() {
    return this.props.complement;
  }
  public set complement(complement: string) {
    this.props.complement = complement;
  }
  public get referencePoint() {
    return this.props.referencePoint;
  }
  public set referencePoint(referencePoint: string) {
    this.props.referencePoint = referencePoint;
  }
  public get city() {
    return this.props.city;
  }
  public set city(city: string) {
    this.props.city = city;
  }
  public get state() {
    return this.props.state;
  }
  public set state(state: string) {
    this.props.state = state;
  }
  public get zipCode() {
    return this.props.zipCode;
  }
  public set zipCode(zipCode: string) {
    this.props.zipCode = zipCode;
  }
  public get district() {
    return this.props.district;
  }
  public set district(district: string) {
    this.props.district = district;
  }
  public get country() {
    return this.props.country;
  }
  public set country(country: string) {
    this.props.country = country;
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
