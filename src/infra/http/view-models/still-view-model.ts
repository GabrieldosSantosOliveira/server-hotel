import { Still } from '@application/entities/still';

import { AddressViewModel } from './address-view-model';
import { FacilityViewModel } from './facility-view-model';
import { ImageViewModel } from './image-view-model';
import { UserViewModel } from './user-view-model';

export class StillViewModel {
  static toHTTP(still: Still) {
    return {
      id: still.id,
      price: still.price,
      sizePerMeter: still.sizePerMeter,
      bathroomNumber: still.bathroomNumber,
      bedNumber: still.bedNumber,
      title: still.title,
      type: still.type.type,
      description: still.description.description,
      owner: UserViewModel.toHTTP(still.owner),
      facilities: still.facilities.map((facility) =>
        FacilityViewModel.toHTTP(facility),
      ),
      images: still.images.map((image) => ImageViewModel.toHTTP(image)),
      address: AddressViewModel.toHTTP(still.address),
      createdAt: still.createdAt,
      updatedAt: still.updatedAt,
    };
  }
}
