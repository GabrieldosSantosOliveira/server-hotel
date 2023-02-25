import { randomUUID } from 'crypto';

type Props = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
type PropsConstructor = {
  id?: string | null;
  name: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};
export class Facilitie {
  private props: Props;
  constructor({ createdAt, id, updatedAt, ...rest }: PropsConstructor) {
    this.props = {
      createdAt: createdAt || new Date(),
      updatedAt: updatedAt || new Date(),
      id: id || randomUUID(),
      ...rest,
    };
  }
  public get id() {
    return this.props.id;
  }
  public get name() {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
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
