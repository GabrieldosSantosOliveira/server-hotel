import { Password } from './password';

const makeSut = () => {
  return Password.create('any_password');
};
describe('Password', () => {
  it('should be create a new password', () => {
    const password = makeSut();
    expect(password).toBeTruthy();
  });
  it('should not be able create a new password with invalid password', () => {
    expect(() => Password.create('')).toThrow();
  });
  it("should not be able create a new password with password's length less than 6", () => {
    expect(() => Password.create('12345')).toThrow();
  });
  it('should be able create a new password with password encrypted', () => {
    const password = makeSut();
    expect(password.password).not.toBe('any_password');
  });
});
