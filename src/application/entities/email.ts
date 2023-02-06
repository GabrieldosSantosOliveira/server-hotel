import { z } from 'zod';

import { InvalidParam } from '../helpers/Invalid-param';

interface EmailProps {
  email: string;
}

export class Email {
  private props: EmailProps;
  private constructor(props: EmailProps) {
    this.props = props;
  }
  static validateEmail(email: string): boolean {
    const schemaEmail = z.string().email();
    const result = schemaEmail.safeParse(email);
    return result.success;
  }
  static create(email: string): Email {
    const isValidEmail = this.validateEmail(email);
    if (!isValidEmail) {
      throw new InvalidParam('Invalid email');
    }
    return new Email({ email });
  }
  get email(): string {
    return this.props.email;
  }
}
