import { Facilitie } from '@application/entities/Facilitie';

export abstract class FacilitieRepository {
  abstract create(facilitie: Facilitie): Promise<void>;
}
