import { HttpException, HttpStatus } from '@nestjs/common';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  IsNumber,
  MinLength,
  validate,
} from 'class-validator';
export class CreateStillBodyDto {
  @IsNotEmpty()
  body: string;
}

export class ValidateBody {
  body: string;
  constructor(body: string) {
    this.body = body;
  }
  public async address() {
    const address = JSON.parse(this.body)?.address;
    const addressBodyDto = new AddressBodyDto();
    if (!addressBodyDto) {
      throw new HttpException('Required Address', HttpStatus.BAD_REQUEST);
    }
    addressBodyDto.city = address?.city;
    addressBodyDto.complement = address?.complement;
    addressBodyDto.country = address?.country;
    addressBodyDto.district = address?.district;
    addressBodyDto.numberOfStill = address?.numberOfStill;
    addressBodyDto.referencePoint = address?.referencePoint;
    addressBodyDto.state = address?.state;
    addressBodyDto.street = address?.street;
    addressBodyDto.zipCode = address?.zipCode;
    const errors = await validate(addressBodyDto);
    if (errors.length > 0) {
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
    return addressBodyDto;
  }

  public async getFacilities() {
    const facilities = JSON.parse(this.body)?.facilities;
    const facilityBodyDto = new FacilityBodyDto();
    if (!facilities) {
      throw new HttpException('Required Facilities', HttpStatus.BAD_REQUEST);
    }
    facilityBodyDto.facilities = facilities;
    const errors = await validate(facilities);
    if (errors.length > 0) {
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
    return facilities;
  }
  public async getStill() {
    const still = JSON.parse(this.body)?.still;
    const stillBodyDto = new StillBodyDto();
    if (!still) {
      throw new HttpException('Required still', HttpStatus.BAD_REQUEST);
    }
    stillBodyDto.price = still?.price;
    stillBodyDto.sizePerMeter = still?.sizePerMeter;
    stillBodyDto.title = still?.title;
    stillBodyDto.type = still?.type;
    stillBodyDto.bathroomNumber = still?.bathroomNumber;
    stillBodyDto.bedNumber = still?.bedNumber;
    stillBodyDto.description = still?.description;
    const errors = await validate(stillBodyDto);
    if (errors.length > 0) {
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
    return stillBodyDto;
  }
  public async getBody() {
    const address = await this.address();
    const facilities = await this.getFacilities();
    const still = await this.getStill();
    return { address, facilities, still };
  }
}
class StillBodyDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsString()
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  @IsNumber()
  sizePerMeter: number;
  @IsNotEmpty()
  @IsNumber()
  bedNumber: number;
  @IsNotEmpty()
  @IsNumber()
  bathroomNumber: number;
  @IsNotEmpty()
  @IsString()
  @MinLength(100)
  description: string;
}
class FacilityBodyDto {
  @IsArray()
  @IsString({ each: true })
  facilities: string[];
}
class AddressBodyDto {
  @IsNotEmpty()
  @IsString()
  numberOfStill: string;
  @IsNotEmpty()
  @IsString()
  street: string;
  @IsOptional()
  @IsString()
  complement?: string;
  @IsOptional()
  @IsString()
  referencePoint?: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsNotEmpty()
  @IsString()
  zipCode: string;
  @IsNotEmpty()
  @IsString()
  district: string;
  @IsNotEmpty()
  @IsString()
  country: string;
}
