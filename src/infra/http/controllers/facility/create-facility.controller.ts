import { CreateFacility } from '@application/use-cases/facility/create-facility';
import { CreateFacilitieBodyDto } from '@infra/dtos/facilities/create-facilitie-body.dto';
import { FacilityViewModel } from '@infra/http/view-models/facility-view-model';
import { Controller, Body, Post } from '@nestjs/common';
@Controller('facility')
export class CreateFacilityController {
  constructor(private readonly createFacility: CreateFacility) {}
  @Post()
  async execute(@Body() { name }: CreateFacilitieBodyDto) {
    const facility = await this.createFacility.execute({
      name,
    });
    return FacilityViewModel.toHTTP(facility);
  }
}
