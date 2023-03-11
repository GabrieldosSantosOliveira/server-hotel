import { Address, IAddressProps } from '@application/entities/address';
import { DescriptionStill } from '@application/entities/description-still';
import { Still } from '@application/entities/still';
import { TypeStill } from '@application/entities/TypeStill';
import { FacilityRepository } from '@application/repositories/facility-repository';
import { ImageRepository } from '@application/repositories/image-repository';
import { StillRepository } from '@application/repositories/still-repository';
import {
  RequestFileSave,
  StorageImageRepository,
} from '@application/repositories/storage-image-repository';
import { UserRepository } from '@application/repositories/user-repository';
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
interface StillParams {
  price: number;
  type: string;
  sizePerMeter: number;
  title: string;
  bathroomNumber: number;
  bedNumber: number;
  description: string;
}
type Request = {
  address: Omit<IAddressProps, 'id' | 'createdAt' | 'updatedAt'>;
  facilities: string[];
  images: RequestFileSave[];
  ownerId: string;
  still: StillParams;
};

@Injectable()
export class CreateStill {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly facilityRepository: FacilityRepository,
    private readonly storageImageRepository: StorageImageRepository,
    private readonly imageRepository: ImageRepository,
    private readonly stillRepository: StillRepository,
  ) {}
  async execute({ address, facilities, images, ownerId, still }: Request) {
    const ownerExist = await this.userRepository.findById(ownerId);
    if (!ownerExist) {
      throw new NotFoundException('Owner not found');
    }

    const facilitiesInStorage = await Promise.all(
      facilities.map((name) => {
        return this.facilityRepository.findByName(name);
      }),
    );
    const facilitiesExist = facilitiesInStorage.filter((facility) =>
      Boolean(facility),
    );
    if (facilitiesExist.length === 0) {
      throw new NotFoundException('Facilities Not found');
    }
    if (images.length < 2) {
      throw new HttpException('Invalid image param', HttpStatus.BAD_REQUEST);
    }
    const imagesUpload = await Promise.all(
      images.map((image) =>
        this.storageImageRepository.upload({
          buffer: image.buffer,
          fileName: image.fileName,
        }),
      ),
    );
    await this.imageRepository.createMany(imagesUpload);
    const newStill = new Still({
      address: new Address({
        city: address.city,
        country: address.country,
        district: address.district,
        numberOfStill: address.numberOfStill,
        state: address.state,
        street: address.street,
        zipCode: address.zipCode,
        complement: address.complement,
        referencePoint: address.referencePoint,
      }),
      bathroomNumber: still.bathroomNumber,
      bedNumber: still.bedNumber,
      description: DescriptionStill.create(still.description),
      sizePerMeter: still.sizePerMeter,
      facilities: facilitiesExist,
      images: imagesUpload,
      owner: ownerExist,
      price: still.price,
      title: still.title,
      type: TypeStill.create(still.type),
    });
    console.log(newStill);
    await this.stillRepository.create(newStill);
    return {
      newStill,
    };
  }
}
