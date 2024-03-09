import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  username: 'postgres',
  password: 'password',
  database: 'dev_testing',
  host: 'localhost',
  dialect: 'postgres',
  logQueryParameters: true
});

export const User = sequelize.define('users', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

export const Pets = sequelize.define('pets', {
  name: DataTypes.STRING,
  breed_name: DataTypes.STRING,
  birthday: DataTypes.DATE,
});