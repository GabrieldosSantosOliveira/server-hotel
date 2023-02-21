import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';
type RequestGetProfileUserUseCase = {
  userId: string;
};
@Injectable()
export class GetProfileUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute({ userId }: RequestGetProfileUserUseCase) {
    return await this.userRepository.findById(userId);
  }
}
