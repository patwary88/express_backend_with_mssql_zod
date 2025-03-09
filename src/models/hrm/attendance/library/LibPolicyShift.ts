import { DataTypes, Model } from 'sequelize';
import { BaseModel, baseModelAttributes } from '../../../BaseModel';
import sequelize from '../../../../config/db';

export interface ILibPolicyShiftAttributes {
  id?: number;
  shift_name?: string;
  shift_prefix?: string;
  shift_type?: number;
  is_shift_crossdate?: number;
  shift_start?: Date;
  shift_end?: Date;
  grace_minutes?: number;
  exit_buffer_minutes?: number;
  entry_restriction_start?: number;
  early_out_start?: number;
  tiffin_start?: Date;
  tiffin_end?: Date;
  is_tiffin_crossdate?: number;
  dinner_start?: Date;
  dinner_end?: Date;
  is_dinner_crossdate?: number;
  lunch_start?: Date;
  lunch_end?: Date;
  is_lunch_crossdate?: number;
  intime_buffer ?:number;
  is_access_control ?:number;
  shift_closing?: Date;
  is_shift_closing_crossdate?:number;
  is_allow_ot_before_shift_start?:number;
  is_deduct_tiffin_time?:number;
  is_deduct_dinner_time?:number;
  is_entry_restriction_treat_absent?: number;
  overtime_policy_id?: number;
  hd_start_min?: number;
  hd_end_min?: number;
  company_id?: number;
  is_night_allowance_applicable?: number;

}

class LibPolicyShift extends BaseModel<ILibPolicyShiftAttributes> implements ILibPolicyShiftAttributes {
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
  public entry_restriction_start!: number;
  public lunch_break_min!: number;
  public dinner_break_min!: number;
  public tiffin_break_min!: number;
  public ip_address!: string;
  public machine_name!: string;
}

LibPolicyShift.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    pid: { type: DataTypes.STRING(20), allowNull: true },
    emp_code: { type: DataTypes.INTEGER, allowNull: true },
    dtime: { type: DataTypes.DATE, allowNull: false },
    ctime: { type: DataTypes.DATE, allowNull: false },
    shift_policy_id: { type: DataTypes.INTEGER, allowNull: true },
    shift_type: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_next_day: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    shift_start: { type: DataTypes.DATE, allowNull: true },
    shift_end: { type: DataTypes.DATE, allowNull: true },
    overtime_policy_id: { type: DataTypes.INTEGER, allowNull: true },
    punch_type: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_manual: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    ref_id: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    company_id: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
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
  {
    sequelize,
    modelName: 'lib_policy_shift', // Logical model name
    tableName: 'lib_policy_shift',  // Explicit table name in DB
    freezeTableName: true,                   // Prevent pluralization
    timestamps: false,
  }
  
);

export default LibPolicyShift;
