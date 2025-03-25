import Joi from 'joi';
import EmployeeBasic from '../../../models/hrm/employee/employeeBasic';
import { isUnique } from '../uniqueValidator'; // Your helper function

// export const uniqueIdCardNo = async (value: string) => {
//   if (!value) return value;
//   const isAvailable = await isUnique(EmployeeBasic, 'id_card_no', value);
//   if (!isAvailable) {
//     throw new Joi.ValidationError("ID Card No already exists", [
//       {
//         message: "ID Card No already exists",
//         path: ["id_card_no"],
//         type: "any.unique",
//         context: { key: "id_card_no", value }
//       }
//     ]);
//   }
//   return value;
// };

// export const uniquePunchCardNo = async (value: string) => {
//   if (!value) return value;
//   const isAvailable = await isUnique(EmployeeBasic, 'punch_card_no', value);
//   if (!isAvailable) {
//     throw new Joi.ValidationError("Punch Card No already exists", [
//       {
//         message: "Punch Card No already exists",
//         path: ["punch_card_no"],
//         type: "any.unique",
//         context: { key: "punch_card_no", value }
//       }
//     ]);
//   }
//   return value;
// };
export const uniqueIdCardNo = async (value: string) => {
  if (!value) return value;
  const isAvailable = await isUnique(EmployeeBasic, "id_card_no", value);
  if (!isAvailable) {
    throw new Joi.ValidationError(
      "ID Card No already exists",
      [
        {
          message: "ID Card No already exists",
          path: ["id_card_no"],
          type: "any.unique",
          context: { key: "id_card_no", value },
        },
      ],
      value // Provide the original value here
    );
  }
  return value;
};

export const uniquePunchCardNo = async (value: string) => {
  if (!value) return value;
  const isAvailable = await isUnique(EmployeeBasic, "punch_card_no", value);
  if (!isAvailable) {
    throw new Joi.ValidationError(
      "Punch Card No already exists",
      [
        {
          message: "Punch Card No already exists",
          path: ["punch_card_no"],
          type: "any.unique",
          context: { key: "punch_card_no", value },
        },
      ],
      value // Provide the original value here
    );
  }
  return value;
};
export const employeeSchema = Joi.object({
  first_name: Joi.string().required().messages({
    'string.empty': 'First name is required'
  }),
  id_card_no: Joi.string().required().external(uniqueIdCardNo).messages({
    'string.empty': 'ID Card No is required'
  }),
  punch_card_no: Joi.string().optional().allow(null, '').external(uniquePunchCardNo),
  last_name: Joi.string().optional(),
}).unknown(true);
