import logger from '../../../../utils/logs/logger';
import { LibPolicyShiftRepository } from '../../../../repositories/hrm/attendance/library/LibPolicyShiftRepository';
import { ILibPolicyShiftAttributes } from '../../../../models/hrm/attendance/library/LibPolicyShift';

export class LibPolicyShiftService {

    public libPolicyShiftRepository: LibPolicyShiftRepository;
    
      constructor() {
        this.libPolicyShiftRepository = new LibPolicyShiftRepository();
      }

    async funcLibPolicyShiftEntry(data: ILibPolicyShiftAttributes,
      currentUserId: number): Promise<ILibPolicyShiftAttributes | any> {
        
        try {
          
            const libPolicyShiftResponse = await this.libPolicyShiftRepository.create(data, { userId: currentUserId });
            return libPolicyShiftResponse;
          } catch (error: any) {
            logger.error(`Error creating employee: ${error.message}`, { stack: error.stack });
            throw error; // Optionally rethrow or handle error
          }


    }

  //   async funcGetEmployeeByEmpCode(emp_code:number):Promise <any>{

  //     const employeeObj = await this.libPolicyShiftRepository.getEmployeeByEmpCode(emp_code);

  //     if (!employeeObj) {
  //       logger.error(`Employee data not found for emp_code  "${emp_code}".`);
  //       return null;
  //     }
  // //console.log(employeeObj);return;
  //     return employeeObj;
  //     //console.log(employeeObj);return;
  //   }

  //   // Retrieve all employees
  //   async getAllEmployees(): Promise<ILibPolicyShiftAttributes[]> {
  //     try {
  //       return await this.libPolicyShiftRepository.findAll();
  //     } catch (error: any) {
  //       logger.error(`Error fetching employees: ${error.message}`, { stack: error.stack });
  //       throw error;
  //     }
  //   }

  //    // Update an employee record
  // async updateEmployee(emp_code: number, data: Partial<ILibPolicyShiftAttributes>): Promise<ILibPolicyShiftAttributes | null> {
  //   try {
  //     //console.log(emp_code);return;
  //     return await this.libPolicyShiftRepository.updateEmployee(emp_code, data);
  //   } catch (error: any) {
  //     logger.error(`Error updating employee with id ${emp_code}: ${error.message}`, { stack: error.stack });
  //     throw error;
  //   }
  // }

  // // Delete an employee record
  // async deleteEmployee(emp_code: number): Promise<boolean> {
  //   try {
  //     return await this.libPolicyShiftRepository.delete(emp_code);
  //   } catch (error: any) {
  //     logger.error(`Error deleting employee with id ${emp_code}: ${error.message}`, { stack: error.stack });
  //     throw error;
  //   }
  // }

}