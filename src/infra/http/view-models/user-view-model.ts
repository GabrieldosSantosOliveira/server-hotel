import { User } from 'src/application/entities/User';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      email: user.email,
      verifiedEmail: user.verifiedEmail,
      familyName: user.familyName,
      givenName: user.givenName,
      birthDate: user.birthDate,
      countryCode: user.countryCode,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
      googleId: user.googleId,
      facebookId: user.facebookId,
      appleId: user.appleId,
      updatedAt: user.updatedAt,
      password: user.password,
      gender: user.gender,
    };
  }
}
