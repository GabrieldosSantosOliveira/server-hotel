import { CreateFacilitie } from '@application/use-cases/facilitie/create-facilitie';
import { CreateFacilitieBodyDto } from '@infra/dtos/facilities/create-facilitie-body.dto';
import { Controller, Body } from '@nestjs/common';
@Controller()
export class CreateFacilitiesController {
  constructor(private readonly createFacilitie: CreateFacilitie) {}
  async execute(@Body() { name }: CreateFacilitieBodyDto) {
    await this.createFacilitie.execute({
      name,
    });
  }
}
