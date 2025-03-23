import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth';
import { employeeBasicController } from '../controllers/hrm/employee/employeeBasicController';
import { body } from 'express-validator';

const router = Router();

router.use(authenticateJWT);
const EmpBasicController = new employeeBasicController();

// POST /api/users/register
router.post(
  '/emp-basic',
  [
    body('first_name').isString().notEmpty().trim().escape(),
    //body('last_name').isString().trim().escape(),
  ],
  EmpBasicController.funcBasicEntry
);

// POST /api/users/login
router.get(
  '/emp-basic/:emp_code',
  [
    body('emp_code').isString().notEmpty().trim().escape(),
  ],
  EmpBasicController.funcGetEmployeeByEmpCode
);

//// Retrieve all employees (GET)
router.get('/emp-basic', EmpBasicController.funcGetAllEmployee);

// Update an employee (PUT)
router.put('/emp-basic/:emp_code', EmpBasicController.funcUpdateEmployee);

// Delete an employee (DELETE)
router.delete('/emp-basic/:emp_code', EmpBasicController.funcdeleteEmployee);


export default router;
