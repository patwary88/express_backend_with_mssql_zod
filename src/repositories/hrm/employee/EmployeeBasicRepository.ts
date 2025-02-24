import { CreateOptions } from 'sequelize';

import EmployeeBasic, { IEmployeeBasicAttributes } from '../../../models/hrm/employee/employeeBasic';

// interface RepoOptions {
//   userId?: number;
// }

// interface RepoOptions extends CreateOptions {
//   userId?: number;
// }
type RepoOptions = CreateOptions<IEmployeeBasicAttributes> & { userId?: number };


export class EmployeeBasicRepository {

    async create(item: IEmployeeBasicAttributes,
      options?: RepoOptions): Promise<IEmployeeBasicAttributes> {
      //console.log(item);return;
      const empBasic = await EmployeeBasic.create(item, options);
      return empBasic.toJSON() as IEmployeeBasicAttributes;
    }
  
    async getEmployeeByEmpCode(emp_code: number): Promise<IEmployeeBasicAttributes | null> {
      const empObject = await EmployeeBasic.findOne({ where: { emp_code } });
      return empObject ? (empObject.toJSON() as IEmployeeBasicAttributes) : null;
    }
    
    // Get all employees
    async findAll(): Promise<IEmployeeBasicAttributes[]> {
      const employees = await EmployeeBasic.findAll();
      return employees.map(emp => emp.toJSON() as IEmployeeBasicAttributes);
    }

    // Update an employee record
    async updateEmployee(emp_code: number, data: Partial<IEmployeeBasicAttributes>): Promise<IEmployeeBasicAttributes | null> {
      //const employee = await EmployeeBasic.findByPk(id);
      const employee = await EmployeeBasic.findOne({ where: { emp_code } });
      if (!employee) return null;
      await employee.update(data);
      return employee.toJSON() as IEmployeeBasicAttributes;
    }

    // Delete an employee record
    async delete(emp_code: number): Promise<boolean> {
      const count = await EmployeeBasic.destroy({ where: { emp_code } });
      return count > 0;
    }
  

    
  }