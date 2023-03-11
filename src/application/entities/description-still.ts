import { InvalidParam } from '@application/helpers/invalid-param';
type Props = {
  description: string;
};
export class DescriptionStill {
  private props: Props;
  private constructor(description: string) {
    this.props = {
      description,
    };
  }
  static create(description: string) {
    const isValidSize = this.validateSize(description);
    if (!isValidSize) {
      throw new InvalidParam('description must be more than 100 characters');
    }
    return new DescriptionStill(description);
  }
  static validateSize(description: string) {
    if (typeof description !== 'string') {
      return false;
    }
    if (description.length < 100) {
      return false;
    }
    return true;
  }
  public get description() {
    return this.props.description;
  }
}
