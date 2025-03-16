import Joi from 'joi';
import  EmployeeBasic  from '../../../models/hrm/employee/employeeBasic';
import { isUnique } from '../uniqueValidator';

/**
 * Custom Joi validation for checking if a field is unique.
 */
const uniqueFirstName = async (value: string) => {
  const isAvailable = await isUnique(EmployeeBasic, 'first_name', value);
  if (!isAvailable) throw new Error('First name already exists');
  return value;
};

export const employeeSchema = Joi.object({
  first_name: Joi.string().required().external(uniqueFirstName), // Async validation
  last_name: Joi.string().optional(),
});
