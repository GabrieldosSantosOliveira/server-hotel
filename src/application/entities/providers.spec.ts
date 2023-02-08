import { Providers } from './providers';
describe('Provider', () => {
  it('should be able to create a new provider', () => {
    const provider = new Providers({});
    expect(provider).toBeTruthy();
  });
});
