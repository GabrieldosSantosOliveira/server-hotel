import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { ConflictException, Injectable } from '@nestjs/common';

type RequestCompleteSingUpWithEmail = {
  email: string;
  familyName: string;
  givenName: string;
  birthDate: Date;
};
@Injectable()
export class CompleteSingUpWithEmail {
  constructor(private readonly userRepository: UserRepository) {}
  async execute({
    familyName,
    givenName,
    email,
    birthDate,
  }: RequestCompleteSingUpWithEmail): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new ConflictException('User not exists');
    }
    if (user.isCompleteRegister) {
      throw new ConflictException('SingUp is completed');
    }
    user.familyName = familyName;
    user.givenName = givenName;
    user.isCompleteRegister = true;
    user.birthDate = birthDate;
    await this.userRepository.save(user);
    return user;
  }
}
