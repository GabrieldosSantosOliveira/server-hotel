import { Address } from '@application/entities/address';
import { Facilitie } from '@application/entities/Facilitie';
import { Still } from '@application/entities/still';
import { StillRepository } from '@application/repositories/still-repository';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CreateStill {
  constructor(
    private readonly stillRepository: StillRepository,
    private readonly userRepository: UserRepository,
  ) {}
  async execute() {
    const user = await this.userRepository.findByEmail('any_email');
    return await this.stillRepository.create(
      new Still({
        address: new Address({
          city: 'any_city',
          country: 'any_country',
          district: 'any_district',
          numberOfStill: 'any_numberOfStill',
          state: 'any_state',
          street: 'any_street',
          zipCode: 'any_zipCode',
        }),
        price: 100,
        size: 2000,
        title: 'any_title',
        type: 'any_type',
        facilities: new Facilitie({
          name: 'any_name',
        }),
        owner: user,
      }),
    );
  }
}
