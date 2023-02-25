import { randomUUID } from 'node:crypto';

import { Email } from './email';
import { Providers } from './providers';
export interface UserProps {
  id: string;
  providers: Providers;
  givenName: string;
  familyName: string;
  password?: string;
  birthDate?: Date;
  isCompleteRegister?: boolean;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  phoneNumber?: string;
  countryCode?: string;
  email: Email;
  verifiedEmail: boolean;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  validEmailToken?: string;
  validEmailExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface PropsConstructor
  extends Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'> {
  id?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}
export class User {
  private props: UserProps;

  constructor(
    { isCompleteRegister = true, ...rest }: PropsConstructor,
    id?: string,
  ) {
    this.props = {
      ...rest,
      isCompleteRegister,
      id: id || randomUUID(),
      createdAt: rest.createdAt || new Date(),
      updatedAt: rest.updatedAt || new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }
  public get googleId(): string {
    return this.props.providers?.googleId;
  }
  public set googleId(googleId: string) {
    this.props.providers.googleId = googleId;
  }
  public get appleId(): string {
    return this.props.providers?.appleId;
  }
  public set appleId(appleId: string) {
    this.props.providers.appleId = appleId;
  }
  public get facebookId(): string {
    return this.props.providers?.facebookId;
  }
  public get givenName(): string {
    return this.props?.givenName;
  }
  public set givenName(givenName: string) {
    this.props.givenName = givenName;
  }
  public get familyName(): string {
    return this.props?.familyName;
  }
  public set familyName(familyName: string) {
    this.props.familyName = familyName;
  }

  public get password(): string {
    return this.props.password;
  }
  public set password(password: string) {
    this.props.password = password;
  }

  public get birthDate(): Date | undefined {
    return this.props?.birthDate;
  }
  public set birthDate(birthDate: Date) {
    this.props.birthDate = birthDate;
  }
  public get gender(): 'MALE' | 'FEMALE' | 'OTHER' | undefined {
    return this.props?.gender;
  }
  public set gender(gender: 'MALE' | 'FEMALE' | 'OTHER') {
    this.props.gender = gender;
  }
  public get phoneNumber(): string | undefined {
    return this.props?.phoneNumber;
  }
  public set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber;
  }
  public get countryCode(): string | undefined {
    return this.props?.countryCode;
  }
  public set countryCode(countryCode: string) {
    this.props.countryCode = countryCode;
  }
  public get email(): string {
    return this.props.email.email;
  }
  public set email(email: string) {
    this.props.email = Email.create(email);
  }
  public get verifiedEmail(): boolean {
    return this.props.verifiedEmail;
  }
  public set verifiedEmail(verifiedEmail: boolean) {
    this.props.verifiedEmail = verifiedEmail;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
  public set isCompleteRegister(isCompleteRegister: boolean) {
    this.props.isCompleteRegister = isCompleteRegister;
  }
  public get isCompleteRegister(): boolean {
    return this.props.isCompleteRegister;
  }
  public get passwordResetToken(): string | undefined {
    return this.props.passwordResetToken;
  }
  public set passwordResetToken(passwordResetToken: string) {
    this.props.passwordResetToken = passwordResetToken;
  }
  public get passwordResetExpires(): Date | undefined {
    return this.props.passwordResetExpires;
  }
  public set passwordResetExpires(passwordResetExpires: Date) {
    this.props.passwordResetExpires = passwordResetExpires;
  }
  public get validEmailToken(): string | undefined {
    return this.props.validEmailToken;
  }
  public set validEmailToken(validEmailToken: string) {
    this.props.validEmailToken = validEmailToken;
  }
  public get validEmailExpires(): Date | undefined {
    return this.props.validEmailExpires;
  }
  public set validEmailExpires(validEmailExpires: Date) {
    this.props.validEmailExpires = validEmailExpires;
  }
}
