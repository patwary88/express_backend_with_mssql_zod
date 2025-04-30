// src/utils/validators/employee/employeeBasicValidator.ts
import { z } from 'zod';
import EmployeeBasic from '../../../models/hrm/employee/employeeBasic';
import { uniqueFieldValidator } from '../uniqueFieldValidator';
//import { calculateAge } from '@utils/common';


function calculateAge(dob: string) {
  return new Date(Date.now() - new Date(dob).getTime())
    .getUTCFullYear() - 1970;
}

export const employeeSchema = z.object({
  // emp_code: z
  //   .string()
  //   .min(1, 'Employee code is required')
  //   .max(20, 'Employee code should be less than 20 characters')
  //   .refine(
  //     val => uniqueFieldValidator(EmployeeBasic, ['emp_code'], [val]),
  //     { message: 'Employee code must be unique', path: ['emp_code'] }
  //   ),

  first_name: z.string().min(1, 'First name is required'),

  id_card_no: z
    .string()
    .min(1, 'ID Card number is required')
    .refine(
      val => uniqueFieldValidator(EmployeeBasic, ['id_card_no'], [val]),
      { message: 'ID Card number must be unique', path: ['id_card_no'] }
    ),

  // punch_card_no: z
  //   .string()
  //   .min(1, 'Punch card number is required')
  //   .refine(
  //     val => uniqueFieldValidator(EmployeeBasic, ['punch_card_no'], [val]),
  //     { message: 'Punch card number must be unique', path: ['punch_card_no'] }
  //   ),
  punch_card_no: z
  .string()
  .min(1, 'Punch card number is required')
  .optional()  // Make this field optional
  .refine(async (val) => {
    // Apply unique validation only if `punch_card_no` is provided (not undefined or null)
    if (val) {
      const result = await uniqueFieldValidator(EmployeeBasic, ['punch_card_no'], [val]);
      return result === true;
    }
    return true;  // Skip validation if no value is provided
  }, {
    message: 'Punch card number must be unique',
    path: ['punch_card_no']
  }),
  
  dob: z
    .string()
    .refine(val => calculateAge(val) >= 18, {
      message: 'Employee must be at least 18 years old',
      path: ['dob']
    }),
});
