import { InvalidParam } from '@application/helpers/invalid-param';
import { hashSync } from 'bcrypt';
type PasswordProps = {
  password: string;
};
export class Password {
  private props: PasswordProps;
  private constructor(password: string) {
    this.props = { password };
  }
  public get password(): string {
    return this.props.password;
  }
  public set password(password: string) {
    this.props.password = password;
  }
  public static isValidPassword(password: string): boolean {
    return password.length >= 6;
  }
  public static encrypt(password: string): string {
    return hashSync(password, 10);
  }
  public static create(password: string): Password {
    if (!Password.isValidPassword(password)) {
      throw new InvalidParam('Password must be at least 6 characters');
    }
    const passwordHash = this.encrypt(password);
    return new Password(passwordHash);
  }
}
