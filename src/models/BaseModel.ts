import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

// export class BaseModel<T> extends Model<T> {
//   public inserted_by?: number;
//   public updated_by?: number;
// }
export class BaseModel<T extends object> extends Model<T> {
  public inserted_by?: number;
  public updated_by?: number;
  public status_active?:number;
  public is_deleted?:number;
}

export const baseModelAttributes = {
  inserted_by: { type: DataTypes.INTEGER, allowNull: true },
  updated_by: { type: DataTypes.INTEGER, allowNull: true },
  status_active: { type: DataTypes.BOOLEAN, allowNull: false,defaultValue:1 },
  is_deleted: { type: DataTypes.BOOLEAN, allowNull: false,defaultValue:0 },
};
