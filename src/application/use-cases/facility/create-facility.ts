import { Facility } from '@application/entities/facility';
import { FacilityRepository } from '@application/repositories/facility-repository';
import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common';
type Request = {
  name: string;
};
@Injectable()
export class CreateFacility {
  constructor(private readonly facilityRepository: FacilityRepository) {}
  async execute({ name }: Request) {
    const existAlreadyFacility = await this.facilityRepository.findByName(name);
    if (existAlreadyFacility) {
      throw new ConflictException('Facility already exist');
    }
    const facility = new Facility({
      name,
    });
    await this.facilityRepository.create(facility);
    return facility;
  }
}
