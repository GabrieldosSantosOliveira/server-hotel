import { Facility } from '@application/entities/facility';

export class FacilityViewModel {
  static toHTTP(facility: Facility) {
    return {
      id: facility.id,
      name: facility.name,
      updatedAt: facility.updatedAt,
      createdAt: facility.createdAt,
    };
  }
}
