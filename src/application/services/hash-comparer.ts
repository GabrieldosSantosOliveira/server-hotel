import { compare } from 'bcrypt';
export class HashComparer {
  static async compare(password: string, hash: string): Promise<boolean> {
    return await compare(password, hash);
  }
}
