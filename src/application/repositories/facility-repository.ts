import { Facility } from '@application/entities/facility';

export abstract class FacilityRepository {
  abstract create(facility: Facility): Promise<void>;
  abstract findByName(name: string): Promise<Facility | null | undefined>;
}
