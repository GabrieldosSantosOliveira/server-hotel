import { InvalidParam } from '@application/helpers/invalid-param';

type Props = {
  type: string;
};
export class TypeStill {
  private props: Props;
  private constructor(type: string) {
    this.props = {
      type,
    };
  }
  static create(type: string) {
    const isValidType = this.validateType(type);
    if (!isValidType) {
      throw new InvalidParam(
        'the still type needs to be Casa, Sobrado, Bangalô, Edícula, Apartamento, Kitnet and Flat',
      );
    }
    return new TypeStill(type);
  }
  static validateType(type: string) {
    if (typeof type !== 'string') {
      return false;
    }
    if (type === 'Casa') {
      return true;
    }
    if (type === 'Sobrado') {
      return true;
    }
    if (type === 'Bangalô') {
      return true;
    }
    if (type === 'Edícula') {
      return true;
    }
    if (type === 'Apartamento') {
      return true;
    }
    if (type === 'Kitnet') {
      return true;
    }
    if (type === 'Flat') {
      return true;
    }
    return false;
  }
  public get type() {
    return this.props.type;
  }
}
