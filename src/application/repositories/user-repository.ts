import { User } from '../entities/user';
export interface UserByEmailAndGoogleId {
  email: string;
  googleId: string;
}

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null | undefined>;
  abstract findById(id: string): Promise<User | null | undefined>;
  abstract findByEmailAndGoogleId(
    data: UserByEmailAndGoogleId,
  ): Promise<User | null | undefined>;
  abstract save(data: User): Promise<void>;
}
