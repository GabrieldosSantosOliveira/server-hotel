import { Address } from './Address';
const makeSut = () => {
  const address = new Address({
    city: 'any_city',
    country: 'any_country',
    district: 'any_district',
    numberOfStill: 'any_numberOfStill',
    state: 'any_state',
    street: 'any_street',
    zipCode: 'any_zipCode',
  });
  return { address };
};
describe('Address', () => {
  it('should be able create a Address', () => {
    const { address } = makeSut();
    expect(address).toBeTruthy();
  });
});
