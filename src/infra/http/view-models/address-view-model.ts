import { Address } from '@application/entities/address';

export class AddressViewModel {
  static toHTTP(address: Address) {
    return {
      id: address.id,
      city: address.city,
      zipCode: address.zipCode,
      state: address.state,
      street: address.street,
      referencePoint: address.referencePoint,
      numberOfStill: address.numberOfStill,
      district: address.district,
      country: address.country,
      complement: address.complement,
      createdAt: address.createdAt,
      updatedAt: address.updatedAt,
    };
  }
}
