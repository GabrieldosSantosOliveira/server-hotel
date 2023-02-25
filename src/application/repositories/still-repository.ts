import { Still } from '@application/entities/still';

export abstract class StillRepository {
  abstract create(still: Still): Promise<any>;
}
