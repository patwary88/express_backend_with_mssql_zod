import { DataTypes, Model } from 'sequelize';
import { BaseModel, baseModelAttributes } from '../../../BaseModel';
import sequelize from '../../../../config/db';

export interface ILibPolicyShiftAttributes {
  id?: number;
  shift_name?: string;
  shift_prefix?: string;
  shift_start?: Date;
  shift_end?: Date;
  shift_type?: number;
  is_shift_crossdate?: number;
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
  is_buyer_mode?: number;

}

class LibPolicyShift extends BaseModel<ILibPolicyShiftAttributes> implements ILibPolicyShiftAttributes {
  public id!: number;
  public shift_name!: string;
  public shift_prefix!: string;
  public shift_start!: Date;
  public shift_end!: Date;
  public shift_type!: number;
  public is_shift_crossdate!:number;
  public grace_minutes!: number;
  public exit_buffer_minutes!: number;
  public entry_restriction_start!: number;
  public early_out_start!: number;
  public tiffin_start!: Date;
  public tiffin_end!: Date;
  public is_tiffin_crossdate!: number;
  public dinner_start!: Date;
  public dinner_end!: Date;
  public is_dinner_crossdate!: number;
  public lunch_start!: Date;
  public lunch_end!: Date;
  public is_lunch_crossdate!: number;
  public intime_buffer!: number;
  public is_access_control!: number;
  public shift_closing!: Date;
  public is_shift_closing_crossdate!: number;
  public is_allow_ot_before_shift_start!: number;
  public is_deduct_tiffin_time!: number;
  public is_deduct_dinner_time!: number;
  public is_entry_restriction_treat_absent!: number;
  public overtime_policy_id!: number;
  public hd_start_min!: number;
  public hd_end_min!: number;
  public company_id!: number;
  public is_night_allowance_applicable!: number;
  public is_buyer_mode!: number;
  
}

LibPolicyShift.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    shift_name: { type: DataTypes.STRING(64), allowNull: false },
    shift_prefix: { type: DataTypes.STRING(20), allowNull: true },
    shift_type: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_shift_crossdate: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    shift_start: { type: DataTypes.DATE, allowNull: false },
    shift_end: { type: DataTypes.DATE, allowNull: false },
    grace_minutes: { type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0 },
    exit_buffer_minutes: { type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0 },
    entry_restriction_start: { type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0 },
    early_out_start: { type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0 },
    tiffin_start: { type: DataTypes.DATE, allowNull: true },
    tiffin_end: { type: DataTypes.DATE, allowNull: true },
    is_tiffin_crossdate: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    dinner_start: { type: DataTypes.DATE, allowNull: true },
    dinner_end: { type: DataTypes.DATE, allowNull: true },
    is_dinner_crossdate: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    lunch_start: { type: DataTypes.DATE, allowNull: true },
    lunch_end: { type: DataTypes.DATE, allowNull: true },
    is_lunch_crossdate: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    intime_buffer: { type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0 },
    is_access_control: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    shift_closing: { type: DataTypes.DATE, allowNull: true },
    is_shift_closing_crossdate: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_allow_ot_before_shift_start: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_deduct_tiffin_time: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_deduct_dinner_time: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_entry_restriction_treat_absent: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    overtime_policy_id: { type: DataTypes.TINYINT, allowNull: false,defaultValue: 0 },
    hd_start_min: { type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0 },
    hd_end_min: { type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0 },
    company_id: { type: DataTypes.TINYINT, allowNull: false,defaultValue: 0 },
    is_night_allowance_applicable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    is_buyer_mode: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    ...baseModelAttributes,
  },
  {
    sequelize,
    modelName: 'lib_policy_shift', // Logical model name
    tableName: 'lib_policy_shift',  // Explicit table name in DB
    freezeTableName: true,                   // Prevent pluralization
    timestamps: true,
  }
  
);

export default LibPolicyShift;
