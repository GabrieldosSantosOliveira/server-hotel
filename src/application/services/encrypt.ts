import { hash } from 'bcrypt';
export class Encrypt {
  static async hash(password: string): Promise<string> {
    return await hash(password, 10);
  }
}
