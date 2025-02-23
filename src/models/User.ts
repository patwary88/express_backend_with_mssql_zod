import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import bcrypt from 'bcryptjs';

export interface IUserAttributes {
  id?: number;
  username: string;
  password: string;
}

class User extends Model<IUserAttributes> implements IUserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;

  public comparePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: 'user', timestamps: true }
);

export default User;
