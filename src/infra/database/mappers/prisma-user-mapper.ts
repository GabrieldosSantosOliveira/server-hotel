import { Email } from '@application/entities/Email';
import { Providers } from '@application/entities/Providers';
import { User } from '@application/entities/User';
import { User as RawUser } from '@prisma/client';
export class PrismaUserMapper {
  static toPrisma(user: User): RawUser {
    return {
      appleId: user.appleId,
      email: user.email,
      familyName: user.familyName,
      givenName: user.givenName,
      id: user.id,
      password: user.password,
      birthDate: user.birthDate,
      countryCode: user.countryCode,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      facebookId: user.facebookId,
      googleId: user.googleId,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      verifiedEmail: user.verifiedEmail,
      isCompleteRegister: user.isCompleteRegister,
      validEmailExpires: user.validEmailExpires,
      validEmailToken: user.validEmailToken,
      passwordResetExpires: user.passwordResetExpires,
      passwordResetToken: user.passwordResetToken,
    };
  }
  static toDomain(raw: RawUser): User {
    return new User(
      {
        email: Email.create(raw.email),
        familyName: raw.familyName,
        givenName: raw.givenName,
        password: raw.password,
        birthDate: raw.birthDate,
        countryCode: raw.countryCode,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        phoneNumber: raw.phoneNumber,
        providers: new Providers({
          appleId: raw.appleId,
          facebookId: raw.facebookId,
          googleId: raw.googleId,
        }),
        verifiedEmail: raw.verifiedEmail,
        gender: raw.gender,
        isCompleteRegister: raw.isCompleteRegister,
        validEmailExpires: raw.validEmailExpires,
        validEmailToken: raw.validEmailToken,
        passwordResetExpires: raw.passwordResetExpires,
        passwordResetToken: raw.passwordResetToken,
      },
      raw.id,
    );
  }
}
