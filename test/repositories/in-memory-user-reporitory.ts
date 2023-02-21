import { User } from '@application/entities/user';
import {
  UserByEmailAndGoogleId,
  UserRepository,
} from '@application/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async findByEmailAndGoogleId(
    data: UserByEmailAndGoogleId,
  ): Promise<User | null> {
    return (
      this.users.find(
        (user) => user.email === data.email && user.googleId === data.googleId,
      ) || null
    );
  }

  async save(data: User): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === data.id);
    this.users[userIndex] = data;
  }
  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => {
      return user.id === id;
    });
    return user;
  }
}
