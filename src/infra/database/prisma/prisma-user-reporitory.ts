import { User } from '@application/entities/User';
import { UserRepository } from '@application/repositories/user-repository';
import { UserByEmailAndGoogleId } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';

import { PrismaUserMapper } from './../mappers/prisma-user-mapper';
import { PrismaService } from './service.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findById(id: string): Promise<User> {
    const raw = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!raw) return null;
    return PrismaUserMapper.toDomain(raw);
  }
  async save(data: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(data);
    await this.prismaService.user.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async findByEmailAndGoogleId({
    email,
    googleId,
  }: UserByEmailAndGoogleId): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email,
          },
          {
            googleId,
          },
        ],
      },
    });
    if (!user) return null;
    return PrismaUserMapper.toDomain(user);
  }
  async findByEmail(email: string): Promise<User | null> {
    const raw = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!raw) return null;
    return PrismaUserMapper.toDomain(raw);
  }
  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);
    await this.prismaService.user.create({
      data: raw,
    });
  }
}
