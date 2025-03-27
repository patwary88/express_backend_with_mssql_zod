//import Joi from 'joi';
import JoiBase from "joi";
import JoiDate from "@joi/date";
// Extend Joi with date functionality
const Joi = JoiBase.extend(JoiDate);

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

export const uniqueNid = async (value: string) => {
  if (!value) return value;
  const isAvailable = await isUnique(EmployeeBasic, "national_id", value);
  if (!isAvailable) {
    throw new Joi.ValidationError(
      "National ID Card No already exists",
      [
        {
          message: "National ID Card No already exists",
          path: ["national_id"],
          type: "any.unique",
          context: { key: "national_id", value },
        },
      ],
      value // Provide the original value here
    );
  }
  return value;
};

export const uniqueBirthRegistration = async (value: string) => {
  if (!value) return value;
  const isAvailable = await isUnique(EmployeeBasic, "birth_registration_no", value);
  if (!isAvailable) {
    throw new Joi.ValidationError(
      "Birth Registration No already exists",
      [
        {
          message: "Birth Registration No already exists",
          path: ["birth_registration_no"],
          type: "any.unique",
          context: { key: "birth_registration_no", value },
        },
      ],
      value // Provide the original value here
    );
  }
  return value;
};

export const employeeBasicEntrySchema = Joi.object({
  first_name: Joi.string().required().messages({
    'string.empty': 'First name is required'
  }),
  id_card_no: Joi.string().required().external(uniqueIdCardNo).messages({
    'string.empty': 'ID Card No is required'
  }),
  punch_card_no: Joi.string().optional().allow(null, '').external(uniquePunchCardNo),
  last_name: Joi.string().optional(),
  national_id: Joi.string().optional().allow(null, '').external(uniqueNid).messages({
    'string.empty': 'National ID Card no is Required'
  }),
  birth_registration_no: Joi.string().optional().allow(null, '').external(uniqueBirthRegistration).messages({
    'string.empty': 'Birth Registration No is required'
  }),
  // dob: Joi.date().format('YYYY-MM-DD').required().messages({
  //   'date.format': 'Date of Birth must be in YYYY-MM-DD format',
  //   'any.required': 'Date of Birth is required',
  // })


  dob: Joi.date()
    .format("YYYY-MM-DD")
    .required()
    .custom((value: string, helpers: JoiBase.CustomHelpers<string>) => { // ✅ Explicitly define 'helpers' type
      if (value === "0000-00-00") {
        return helpers.error("any.invalid");
      }
      return value;
    })
    .messages({
      "date.format": "Date of Birth must be in YYYY-MM-DD format",
      "any.required": "Date of Birth is required",
      "any.invalid": "Invalid Date: 0000-00-00 is not allowed",
    }),
  // dob: Joi.string()
  //   .pattern(/^\d{4}-\d{2}-\d{2}$/)
  //   .invalid("0000-00-00") // Explicitly reject this value
  //   .required()
  //   .messages({
  //     "string.pattern.base": "Date of Birth must be in YYYY-MM-DD format",
  //     "any.required": "Date of Birth is required",
  //     "any.invalid": "Invalid Date: 0000-00-00 is not allowed",
  //   }),


}).unknown(true);

export const GetEmployeeBasicEntrySchema = Joi.object({
  emp_code: Joi.string().required().messages({
    'string.empty': 'Emp Code Is Required!'
  }),
});