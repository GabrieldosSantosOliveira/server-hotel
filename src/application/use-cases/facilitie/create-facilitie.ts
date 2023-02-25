import { Facilitie } from '@application/entities/Facilitie';
import { FacilitieRepository } from '@application/repositories/facilitie-repository';
import { Injectable } from '@nestjs/common';
type Request = {
  name: string;
};
@Injectable()
export class CreateFacilitie {
  constructor(private readonly facilitieRepository: FacilitieRepository) {}
  async execute({ name }: Request) {
    const facilitie = new Facilitie({
      name,
    });
    return await this.facilitieRepository.create(facilitie);
  }
}
