import { CreateOptions } from 'sequelize';

import LibPolicyShift, { ILibPolicyShiftAttributes } from '../../../../models/hrm/attendance/library/LibPolicyShift';

// interface RepoOptions {
//   userId?: number;
// }

// interface RepoOptions extends CreateOptions {
//   userId?: number;
// }
type RepoOptions = CreateOptions<ILibPolicyShiftAttributes> & { userId?: number };


export class LibPolicyShiftRepository {

    async create(item: ILibPolicyShiftAttributes,
      options?: RepoOptions): Promise<ILibPolicyShiftAttributes> {
      //  console.log(options);return;
      const retlibraryPolicyShift = await LibPolicyShift.create(item, options);
      return retlibraryPolicyShift.toJSON() as ILibPolicyShiftAttributes;
    }
  
    // async getEmployeeByEmpCode(emp_code: number): Promise<ILibPolicyShiftAttributes | null> {
    //   const empObject = await LibPolicyShift.findOne({ where: { emp_code } });
    //   return empObject ? (empObject.toJSON() as ILibPolicyShiftAttributes) : null;
    // }
    
    // // Get all employees
    // async findAll(): Promise<ILibPolicyShiftAttributes[]> {
    //   const employees = await LibPolicyShift.findAll();
    //   return employees.map(emp => emp.toJSON() as ILibPolicyShiftAttributes);
    // }

    // // Update an employee record
    // async updateEmployee(emp_code: number, data: Partial<ILibPolicyShiftAttributes>): Promise<ILibPolicyShiftAttributes | null> {
    //   //const employee = await LibPolicyShift.findByPk(id);
    //   const employee = await LibPolicyShift.findOne({ where: { emp_code } });
    //   if (!employee) return null;
    //   await employee.update(data);
    //   return employee.toJSON() as ILibPolicyShiftAttributes;
    // }

    // // Delete an employee record
    // async delete(emp_code: number): Promise<boolean> {
    //   const count = await LibPolicyShift.destroy({ where: { emp_code } });
    //   return count > 0;
    // }
  

    
  }