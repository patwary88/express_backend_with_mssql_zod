import { DataTypes, Model } from 'sequelize';
import sequelizeMSSQL from '../../config/db-mssql';

export interface ISourceEmployeeAttendanceAttributes {
  IndexKey?: number;
  UserID: string;
  TransactionTime: Date;
}

class SourceEmployeeAttendance extends Model<ISourceEmployeeAttendanceAttributes> implements ISourceEmployeeAttendanceAttributes {
  public IndexKey!: number;
  public UserID!: string;
  public TransactionTime!: Date;
}

SourceEmployeeAttendance.init(
  {
    IndexKey: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    UserID: { type: DataTypes.INTEGER, allowNull: false },
    TransactionTime: { type: DataTypes.DATE, allowNull: false },
  },
  { sequelize: sequelizeMSSQL, modelName: 'NGAC_AUTHLOG', timestamps: false }
);

export default SourceEmployeeAttendance;
