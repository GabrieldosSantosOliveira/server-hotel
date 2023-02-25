import { Still } from '@application/entities/still';
import {
  Still as RawStill,
  Facilitie as RawFacilitie,
  User as RawUser,
  Address as RawAddress,
  Image as RawImage,
} from '@prisma/client';

import { PrismaFacilitieMapper } from './prisma-facilitie-mapper';
import { PrismaUserMapper } from './prisma-user-mapper';
type ResponseToPrisma = {
  still: RawStill;
  facilities: Omit<RawFacilitie, 'stillId'>;
  owner: Omit<RawUser, 'stillId'>;
  address: Omit<RawAddress, 'stillId'>;
  image?: Omit<RawImage, 'stillId'>;
};
export class PrismaStillMapper {
  static toPrisma(still: Still): ResponseToPrisma {
    const { image } = still;
    return {
      address: {
        city: still.address.city,
        complement: still.address.complement,
        country: still.address.country,
        createdAt: still.address.createdAt,
        district: still.address.district,
        id: still.address.id,
        numberOfStill: still.address.numberOfStill,
        referencePoint: still.address.referencePoint,
        state: still.address.state,
        street: still.address.street,
        updatedAt: still.address.updatedAt,
        zipCode: still.address.zipCode,
      },
      owner: PrismaUserMapper.toPrisma(still.owner),
      facilities: PrismaFacilitieMapper.toPrisma(still.facilities),
      still: {
        createdAt: still.createdAt,
        id: still.id,
        ownerId: still.owner.id,
        price: still.price,
        size: still.size,
        title: still.title,
        type: still.type,
        updatedAt: still.updatedAt,
      },
      image: image
        ? {
            createdAt: still?.image.createdAt,
            id: still?.image.id,
            key: still?.image.key,
            updatedAt: still?.image.updatedAt,
            url: still?.image.url,
            userId: null,
          }
        : undefined,
    };
  }
}
