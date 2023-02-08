import { Email } from './email';
import { Providers } from './providers';
import { User, PropsConstructor } from './user';

const makeSut = (rest?: Partial<PropsConstructor>) =>
  new User({
    givenName: 'any_given_name',
    familyName: 'any_family_name',
    providers: new Providers({}),
    email: Email.create('any_email@gmail.com'),
    password: 'any_password',
    verifiedEmail: false,
    ...rest,
  });

describe('User', () => {
  it('should be create a new user', () => {
    const user = makeSut();
    expect(user).toBeTruthy();
  });
  it('should not be able create a new user with invalid email', () => {
    const user = makeSut();
    expect(() => makeSut({ email: Email.create('invalid_email') })).toThrow();
    expect(() => {
      user.email = 'invalid_email';
    }).toThrow();
  });
});
