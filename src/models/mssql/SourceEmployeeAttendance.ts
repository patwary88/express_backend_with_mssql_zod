import { DataTypes, Model } from 'sequelize';
import sequelizeMSSQL from '../../config/db-mssql';

export interface ISourceEmployeeAttendanceAttributes {
  id?: number;
  employeeId: number;
  attendanceDate: Date;
  status: string;
}

class SourceEmployeeAttendance extends Model<ISourceEmployeeAttendanceAttributes> implements ISourceEmployeeAttendanceAttributes {
  public id!: number;
  public employeeId!: number;
  public attendanceDate!: Date;
  public status!: string;
}

SourceEmployeeAttendance.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    employeeId: { type: DataTypes.INTEGER, allowNull: false },
    attendanceDate: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize: sequelizeMSSQL, modelName: 'source_employee_attendance', timestamps: false }
);

export default SourceEmployeeAttendance;
