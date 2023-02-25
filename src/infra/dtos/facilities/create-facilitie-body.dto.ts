import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFacilitieBodyDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
