import { compare } from 'bcrypt';
interface Params {
  password: string;
  passwordHash: string;
}
export class HashComparer {
  static async compare({ password, passwordHash }: Params): Promise<boolean> {
    return await compare(password, passwordHash);
  }
}
