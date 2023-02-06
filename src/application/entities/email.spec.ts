import { Email } from './email';
const makeSut = () => Email.create('any_email@gmail.com');
describe('Email', () => {
  it('should be create a new email', () => {
    const email = makeSut();
    expect(email).toBeTruthy();
  });
  it('should not be able create a new email with invalid email', () => {
    expect(() => Email.create('invalid_email')).toThrow();
  });
});
