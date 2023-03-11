import { Address } from './address';
import { DescriptionStill } from './description-still';
import { Email } from './email';
import { Facility } from './facility';
import { Image } from './image';
import { Providers } from './providers';
import { Still } from './still';
import { TypeStill } from './TypeStill';
import { User } from './user';
const makeSut = () => {
  const still = new Still({
    address: new Address({
      city: 'any_city',
      country: 'any_country',
      district: 'any_district',
      numberOfStill: 'any_numberOfStill',
      state: 'any_state',
      street: 'any_street',
      zipCode: 'any_zipCode',
    }),
    price: 100,
    sizePerMeter: 2000,
    bathroomNumber: 2,
    bedNumber: 1,
    title: 'Ola',
    type: TypeStill.create('any_type'.repeat(150)),
    description: DescriptionStill.create('any_description'),
    owner: new User({
      email: Email.create('any_email@gmail.com'),
      familyName: 'any_family_name',
      givenName: 'any_given_name',
      providers: new Providers({}),
      verifiedEmail: false,
    }),
    images: [new Image({ key: 'kk', url: 'Kk' })],
    facilities: [
      new Facility({
        name: 'any_name',
      }),
    ],
  });
  return { still };
};
describe('Still', () => {
  it('should be able create a still', () => {
    const { still } = makeSut();
    expect(still).toBeTruthy();
  });
});
