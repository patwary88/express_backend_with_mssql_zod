import { DataTypes, Model } from 'sequelize';
import { BaseModel, baseModelAttributes } from '../../BaseModel';

//import { IEmployeeBasicAttributes } from '../interface/employeeInterface';

import sequelize from '../../../config/db';

export interface IEmployeeBasicAttributes {
    id?: number;
    emp_code?: number;
    first_name: string;
    last_name: string;
    inserted_by?: number;
    updated_by?: number;
  }

  class EmployeeBasic extends BaseModel<IEmployeeBasicAttributes> implements IEmployeeBasicAttributes {
    public id!: number;
    public emp_code!: number;
    public first_name!: string;
    public last_name!: string;
  }

  EmployeeBasic.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      emp_code: { type: DataTypes.INTEGER, allowNull: true },
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: true },
      ...baseModelAttributes,
      
    },
    { sequelize, modelName: 'hrm_employee', timestamps: true }
  );

  // afterCreate hook: set emp_code to the generated id if not already set
EmployeeBasic.afterCreate(async (employee, options) => {
 // console.log(employee);
  //console.log(options);
  // Check if emp_code is not already set
  if (!employee.emp_code) {
    employee.emp_code = employee.id;
    // Save the updated record; ensure you pass along the transaction if needed
    await employee.save({ transaction: options.transaction });
  }
});


// After creation: set inserted_by and updated_by from options.userId
EmployeeBasic.beforeCreate((employee, options: any) => {
  if (options.userId) {
    employee.inserted_by = options.userId;
    //employee.updated_by = options.userId;
  }
});

// Before update: set updated_by from options.userId
EmployeeBasic.beforeUpdate((employee, options: any) => {
  if (options.userId) {
    employee.updated_by = options.userId;
  }
});

  export default EmployeeBasic;