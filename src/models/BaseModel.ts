import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

// export class BaseModel<T> extends Model<T> {
//   public inserted_by?: number;
//   public updated_by?: number;
// }
export class BaseModel<T extends object> extends Model<T> {
  public inserted_by?: number;
  public updated_by?: number;
}

export const baseModelAttributes = {
  inserted_by: { type: DataTypes.INTEGER, allowNull: true },
  updated_by: { type: DataTypes.INTEGER, allowNull: true },
};
