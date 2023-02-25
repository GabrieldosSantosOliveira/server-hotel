import { CreateStill } from '@application/use-cases/still/create-still';
import { Controller, Post } from '@nestjs/common';
@Controller('still')
export class CreateStillController {
  constructor(private readonly createStill: CreateStill) {}
  @Post()
  async execute() {
    return await this.createStill.execute();
  }
}
