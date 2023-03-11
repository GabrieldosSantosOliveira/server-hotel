import { Address } from '@application/entities/Address';
import { Address as RawAddress } from '@prisma/client';
export class PrismaAddressMapper {
  static toPrisma(address: Address): RawAddress {
    return {
      city: address.city,
      complement: address.complement,
      country: address.country,
      createdAt: address.createdAt,
      district: address.district,
      id: address.id,
      numberOfStill: address.numberOfStill,
      referencePoint: address.referencePoint,
      state: address.state,
      street: address.street,
      updatedAt: address.updatedAt,
      zipCode: address.zipCode,
      stillId: undefined,
    };
  }
}
