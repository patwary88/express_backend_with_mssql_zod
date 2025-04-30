import logger from '../../../utils/logs/logger';
import { Request, Response , NextFunction} from 'express';
import { validationResult } from 'express-validator';
import { EmployeeBasicService } from '../../../services/hrm/employee/EmployeeBasicService';
//import { BusinessValidationError } from '../../../errors/BusinessValidationError';
export class employeeBasicController {

    public employeeBasicService: EmployeeBasicService;
    
      constructor() {
        this.employeeBasicService = new EmployeeBasicService();
      }

    // funcBasicEntry = async (req: Request, res: Response): Promise<void> => {
    //     const errors = validationResult(req);
    //     //console.log(errors);return;
    //     if (!errors.isEmpty()) {
    //         res.status(400).json({ errors: errors.array() });
    //         return;
    //     }

    //     try{
    //       const currentUserId = (req as any).user.id;
    //       const employeeData = req.body;
    //       //console.log(currentUserId);return;
    //       //  const { first_name, last_name } = req.body;
            
    //         const employee = await this.employeeBasicService.funcBasicEntry(employeeData, currentUserId);
    //         res.status(201).json(employee);

    //     }catch (error: any) {
    //       res.status(500).json({ message: error.message });
    //     }
    // }
    
      // Note: The function signature includes NextFunction to pass errors if needed.
  funcBasicEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // At this point, req.body is validated by validateRequest middleware.
      const currentUserId = (req as any).user?.id;
      const employeeData = req.body;
      const employee = await this.employeeBasicService.funcBasicEntry(employeeData, currentUserId);
      res.status(201).json({ success: true, data: employee });
    } catch (error: any) {

      // Check if it's a business validation error and return a structured error response
      // if (error instanceof BusinessValidationError) {
      //   res.status(400).json({
      //     success: false,
      //     message: "Business validation failed",
      //     errors: error.errors,
      //   });
      //   return; // Exit function without returning a Response object
      // }

      logger.error(`Error creating employee: ${error.message}`, { stack: error.stack });
      // Pass error to global error handler (or return proper response)
      next(error);
    }
  }

    funcGetEmployeeByEmpCode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
     
      try {

        const { emp_code } = req.body;
        const employee = await this.employeeBasicService.funcGetEmployeeByEmpCode(emp_code);       
        res.status(200).json( {employee} );

      }catch (error: any) {

        // if (error instanceof BusinessValidationError) {
        //   res.status(400).json({
        //     success: false,
        //     message: "Business validation failed",
        //     errors: error.errors,
        //   });
        //   return; // Exit function without returning a Response object
        // }
  
        logger.error(`Error Get employee: ${error.message}`, { stack: error.stack });
        // Pass error to global error handler (or return proper response)
        next(error);
      }
      
    }


    funcGetAllEmployee = async (req: Request, res: Response): Promise<void> => {
      try {
        const employees = await this.employeeBasicService.getAllEmployees();
        res.json(employees);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };


     // Update an employee
    funcUpdateEmployee = async (req: Request, res: Response): Promise<void> => {
    try {

      const emp_code = parseInt(req.params.emp_code, 10);
        if (isNaN(emp_code)) {
          res.status(400).json({ message: 'Invalid employee code' });
          return;
      }

      const currentUserId = (req as any).user.id;
      
      const updateData = req.body;
      updateData.updated_by = currentUserId;
      
      const employee = await this.employeeBasicService.updateEmployee(emp_code, updateData);
      if (employee) {
        res.json(employee);
      } else {
        res.status(404).json({ message: 'Employee not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };


    funcdeleteEmployee = async (req: Request, res: Response): Promise<void> => {
      try {
        const emp_code = parseInt(req.params.emp_code, 10);

        if (isNaN(emp_code)) {
          res.status(400).json({ message: 'Invalid employee code' });
          return;
      }

        const deleted = await this.employeeBasicService.deleteEmployee(emp_code);
        if (deleted) {
          res.json({ message: 'Employee deleted successfully' });
        } else {
          res.status(404).json({ message: 'Employee not found' });
        }
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };
    
    
}