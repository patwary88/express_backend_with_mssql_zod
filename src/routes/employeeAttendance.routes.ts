import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth';
import { libPoichShiftController } from '../controllers/hrm/attendance/library/libPoichShiftController';
import { body } from 'express-validator';

const router = Router();

router.use(authenticateJWT);
const LibPoichShiftController = new libPoichShiftController();

// POST /api/users/register
router.post(
  '/library/lib-policy-shift',
  [
    body('shift_name').isString().notEmpty().trim().escape(),
    body('shift_start')
      .isISO8601() // Ensures it is a valid date or datetime
      .toDate(),   // Converts it to a Date object
    body('shift_end')
      .isISO8601()
      .toDate(),
    
  ],
  LibPoichShiftController.funcLibPolicyShiftEntry
);

// POST /api/users/login
// router.get(
//   '/emp-basic/:emp_code',
//   [
//     body('emp_code').isString().notEmpty().trim().escape(),
//   ],
//   LibPoichShiftController.funcGetEmployeeByEmpCode
// );

// //// Retrieve all employees (GET)
// router.get('/emp-basic', LibPoichShiftController.funcGetAllEmployee);

// // Update an employee (PUT)
// router.put('/emp-basic/:emp_code', LibPoichShiftController.funcUpdateEmployee);

// // Delete an employee (DELETE)
// router.delete('/emp-basic/:emp_code', LibPoichShiftController.funcdeleteEmployee);


export default router;
