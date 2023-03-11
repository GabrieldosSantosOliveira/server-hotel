import { Still } from '@application/entities/still';
import {
  Still as RawStill,
  Facility as RawFacility,
  User as RawUser,
  Address as RawAddress,
  Image as RawImage,
} from '@prisma/client';

import { PrismaAddressMapper } from './prisma-address-mapper';
import { PrismaFacilityMapper } from './prisma-facility-mapper';
import { PrismaUserMapper } from './prisma-user-mapper';
type ResponseToPrisma = {
  still: RawStill;
  facilities: Omit<RawFacility, 'stillId'>[];
  owner: Omit<RawUser, 'stillId'>;
  address: Omit<RawAddress, 'stillId'>;
  images: Omit<RawImage, 'stillId'>[];
};
export class PrismaStillMapper {
  static toPrisma(still: Still): ResponseToPrisma {
    const { images } = still;
    return {
      address: PrismaAddressMapper.toPrisma(still.address),
      owner: PrismaUserMapper.toPrisma(still.owner),
      facilities: still.facilities.map((facility) =>
        PrismaFacilityMapper.toPrisma(facility),
      ),
      still: {
        createdAt: still.createdAt,
        id: still.id,
        ownerId: still.owner.id,
        price: still.price,
        title: still.title,
        bathroomNumber: still.bathroomNumber,
        bedNumber: still.bedNumber,
        sizePerMeter: still.sizePerMeter,
        type: still.type.type,
        updatedAt: still.updatedAt,
        description: still.description.description,
      },
      images: images.map((image) => {
        return {
          createdAt: image.createdAt,
          id: image.id,
          key: image.key,
          updatedAt: image.updatedAt,
          url: image.url,
          userId: null,
        };
      }),
    };
  }
}
