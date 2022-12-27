import Sequelize, { Model, Optional } from 'sequelize';
interface IUser {
  id: string;
  googleId?: string;
  givenName: string;
  familyName: string;
  picture: string;
  password?: string;
  nickName: string;
  birthDate?: Date;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  phoneNumber?: number;
  countryCode?: number;
  email: string;
  verifiedEmail: boolean;
  createdAt: Date;
  updatedAt: Date;
}
type IUserCreate = Optional<
  IUser,
  'id' | 'createdAt' | 'updatedAt'
>;
class User extends Model<IUser, IUserCreate> {
  static initModel(sequelize: Sequelize.Sequelize) {
    this.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        googleId: {
          type: Sequelize.STRING,
          allowNull: true
        },
        givenName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        familyName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        picture: {
          type: Sequelize.STRING,
          allowNull: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: true
        },
        nickName: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        birthDate: {
          type: Sequelize.DATE,
          allowNull: true
        },
        gender: {
          type: Sequelize.ENUM('MALE', 'FEMALE', 'OTHER'),
          allowNull: true
        },
        phoneNumber: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        countryCode: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        verifiedEmail: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'users'
      }
    );
  }
  declare id: string;
}
export { User };
