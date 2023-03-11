import { DescriptionStill } from './description-still';

describe('DescribeStill', () => {
  it('should not be able create description still with less 100 character', () => {
    expect(() => DescriptionStill.create('.'.repeat(98))).toThrow();
  });
  it('should be able create description still with more 100 character', () => {
    expect(() => DescriptionStill.create('.'.repeat(150))).toBeTruthy();
  });
});
