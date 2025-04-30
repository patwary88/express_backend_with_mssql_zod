import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth';
import { body } from 'express-validator';
import { employeeBasicController } from '../controllers/hrm/employee/employeeBasicController';
//import { validateEmployee } from '../middleware/hrm/employee/validateEmployee';

import { validateRequest } from '../middleware/validateRequest';
import { employeeSchema } from '../utils/validators/employee/employeeBasicValidator';


const router = Router();

router.use(authenticateJWT);
const EmpBasicController = new employeeBasicController();


router.post(
  '/emp-basic',

  validateRequest(employeeSchema),
  EmpBasicController.funcBasicEntry
);


// POST /api/users/login
router.get(
  '/emp-basic/:emp_code',
  [
    body('emp_code').isString().notEmpty().trim().escape(),
  ],
  //validateRequest(GetEmployeeBasicEntrySchema),
  EmpBasicController.funcGetEmployeeByEmpCode
);

//// Retrieve all employees (GET)
router.get('/emp-basic', EmpBasicController.funcGetAllEmployee);

// Update an employee (PUT)
router.put('/emp-basic/:emp_code', EmpBasicController.funcUpdateEmployee);

// Delete an employee (DELETE)
router.delete('/emp-basic/:emp_code', EmpBasicController.funcdeleteEmployee);

export default router;
