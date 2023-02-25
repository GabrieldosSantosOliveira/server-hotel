import { Address } from './address';
import { Email } from './email';
import { Facilitie } from './Facilitie';
import { Providers } from './providers';
import { Still } from './still';
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
    size: 2000,
    title: 'Ola',
    type: 'any_type',
    owner: new User({
      email: Email.create('any_email@gmail.com'),
      familyName: 'any_family_name',
      givenName: 'any_given_name',
      providers: new Providers({}),
      verifiedEmail: false,
    }),
    facilities: new Facilitie({
      name: 'any_name',
    }),
  });
  return { still };
};
describe('Still', () => {
  it('should be able create a still', () => {
    const { still } = makeSut();
    expect(still).toBeTruthy();
  });
});
