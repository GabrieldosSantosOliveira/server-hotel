/* eslint-disable @typescript-eslint/ban-types */
import Sequelize from 'sequelize';

import * as configDatabase from './../config/config';
import { User } from './User';
const connection = new Sequelize.Sequelize(
  configDatabase as Object
);
User.initModel(connection);
export { User };
