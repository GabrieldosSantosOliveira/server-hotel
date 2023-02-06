import { Injectable } from '@nestjs/common';
import { User } from 'src/application/entities/User';
import { UserRepository } from 'src/application/repositories/user-repository';

import { PrismaUserMapper } from './../mappers/prisma-user-mapper';
import { PrismaService } from './service.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}
  async findByEmail(email: string): Promise<User> {
    try {
      const raw = await this.prismaService.user.findUnique({
        where: {
          email,
        },
      });
      return PrismaUserMapper.toDomain(raw);
    } catch (e) {
      console.log(e);
    }
  }
  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);
    await this.prismaService.user.create({
      data: raw,
    });
  }
}
