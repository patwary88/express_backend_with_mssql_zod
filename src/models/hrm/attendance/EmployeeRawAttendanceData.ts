import { DataTypes, Model } from 'sequelize';
import { BaseModel, baseModelAttributes } from '../../BaseModel';
import sequelize from '../../../config/db';


export interface IEmployeeRawAttendanceDataAttributes {
    id?: number;
    pid: string;
    emp_code?: number;
    dtime: Date;
    ctime: Date;
    shift_policy_id?: number;
    shift_type?: number;
    is_next_day?: number;
    shift_start?: Date;
    shift_end?: Date;
    overtime_policy_id?: number;
    punch_type?: number;
    is_manual?: number;
    ref_id?: number;
    company_id?: number;
    location_id?: number;
    grace_minutes?: number;
    exit_buffer_minutes?: number;
    entry_restriction_start?:number;
    lunch_break_min?:number;
    dinner_break_min?:number;
    tiffin_break_min?:number;
    ip_address:string;
    machine_name:string;
  }
  
  class EmployeeRawAttendanceData extends BaseModel<IEmployeeRawAttendanceDataAttributes> implements IEmployeeRawAttendanceDataAttributes {
    public id!: number;
    public pid!: string;
    public emp_code!: number;
    public dtime!: Date;
    public ctime!: Date;
    public shift_policy_id!: number;
    public shift_type!: number;
    public is_next_day!: number;
    public shift_start!: Date;
    public shift_end!: Date;
    public overtime_policy_id!: number;
    public punch_type!: number;
    public is_manual!: number;
    public ref_id!: number;
    public company_id!: number;
    public location_id!: number;
    public grace_minutes!: number;
    public exit_buffer_minutes!: number;
    public entry_restriction_start!:number;
    public lunch_break_min!:number;
    public dinner_break_min!:number;
    public tiffin_break_min!:number;
    public ip_address!:string;
    public machine_name!:string;
  }

  EmployeeRawAttendanceData.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      pid: { type: DataTypes.STRING(20), allowNull: true },
      emp_code: { type: DataTypes.INTEGER, allowNull: true },
      dtime: { type: DataTypes.DATE, allowNull: false },
      ctime: { type: DataTypes.DATE, allowNull: false },
      shift_policy_id: { type: DataTypes.INTEGER, allowNull: true },
      shift_type: { type: DataTypes.BOOLEAN, allowNull: false,defaultValue:0 },
      is_next_day: { type: DataTypes.BOOLEAN, allowNull: false,defaultValue:0 },
      shift_start: { type: DataTypes.DATE, allowNull: true },
      shift_end: { type: DataTypes.DATE, allowNull: true },
      overtime_policy_id: { type: DataTypes.INTEGER, allowNull: true },
      punch_type: { type: DataTypes.BOOLEAN, allowNull: false,defaultValue:0 },
      is_manual: { type: DataTypes.BOOLEAN, allowNull: false,defaultValue:0 },
      ref_id: { type: DataTypes.INTEGER, allowNull: false,defaultValue:0 },
      company_id: { type: DataTypes.INTEGER, allowNull: false,defaultValue:0 },
      location_id: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      grace_minutes: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      exit_buffer_minutes: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      entry_restriction_start: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      lunch_break_min: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      dinner_break_min: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      tiffin_break_min: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      ip_address: { type: DataTypes.STRING(50), allowNull: true },
      machine_name: { type: DataTypes.STRING(50), allowNull: true },
      ...baseModelAttributes,
      
    },
    { sequelize, modelName: 'hrm_raw_data_attnd_backup', timestamps: true }
  );

  // afterCreate hook: set emp_code to the generated id if not already set
//EmployeeBasic.afterCreate(async (employee, options) => {
//  // console.log(employee);
//   //console.log(options);
//   // Check if emp_code is not already set
//   if (!employee.emp_code) {
//     employee.emp_code = employee.id;
//     // Save the updated record; ensure you pass along the transaction if needed
//     await employee.save({ transaction: options.transaction });
//   }
// });


// // After creation: set inserted_by and updated_by from options.userId
EmployeeRawAttendanceData.beforeCreate((rawAttendance, options: any) => {
  if (options.userId) {
    rawAttendance.inserted_by = options.userId;
    //employee.updated_by = options.userId;
  }
});

// // Before update: set updated_by from options.userId
// EmployeeBasic.beforeUpdate((employee, options: any) => {
//   if (options.userId) {
//     employee.updated_by = options.userId;
//   }
// });
// EmployeeBasic.afterUpdate((employee, options: any) => {
//   if (options.userId) {
//     employee.updated_by = options.userId;
//   }
// });
  export default EmployeeRawAttendanceData;