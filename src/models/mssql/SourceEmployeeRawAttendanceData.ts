import { DataTypes, Model } from 'sequelize';
import sequelizeMSSQL from '../../config/db-mssql';

export interface ISourceEmployeeRawAttendanceDataAttributes {
  IndexKey?: number;
  UserID: number; // Changed to number to match the column type
  TransactionTime: Date;
}

class SourceEmployeeRawAttendanceData extends Model<ISourceEmployeeRawAttendanceDataAttributes>
  implements ISourceEmployeeRawAttendanceDataAttributes {
  public IndexKey!: number;
  public UserID!: number;
  public TransactionTime!: Date;
}

SourceEmployeeRawAttendanceData.init(
  {
    IndexKey: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    UserID: { type: DataTypes.INTEGER, allowNull: false },
    TransactionTime: { type: DataTypes.DATE, allowNull: false },
  },
  {
    sequelize: sequelizeMSSQL,
    modelName: 'NGAC_AUTHLOG',
    tableName: 'NGAC_AUTHLOG', // Use the exact table name in MSSQL
    freezeTableName: true,      // Prevent Sequelize from pluralizing the table name
    timestamps: false,
  }
);

export default SourceEmployeeRawAttendanceData;
