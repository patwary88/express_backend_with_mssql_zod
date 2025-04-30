import { Request, Response, NextFunction } from 'express';
import logger from '../../../utils/logs/logger';
import { ValidationError } from 'sequelize';
import { EmployeeBasicService } from '../../../services/hrm/employee/EmployeeBasicService';

export class employeeBasicController {
  public employeeBasicService: EmployeeBasicService;

  constructor() {
    this.employeeBasicService = new EmployeeBasicService();
  }

  // funcBasicEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {

  //     const validatedReq = req as Request & { validatedData: any };

  //     // alternet systex for force type casting or assertion
  //     //const validatedReq = <Request & { validatedData: any }>req;


  //     const employeeData = validatedReq.validatedData;

  //     //console.log(employeeData);

  //     //const employeeData = req.validatedData;  // TypeScript should now recognize this property
  //     const currentUserId = (req as any).user?.id;
  //     //console.log(currentUserId);

  //     // Call the service or business logic to create the employee
  //     const employee = await this.employeeBasicService.funcBasicEntry(employeeData, currentUserId);

  //     // Return the successful response
  //     res.status(201).json({ success: true, data: employee });
  //   } catch (error: any) {

  //     if (error instanceof ValidationError) {
  //       // Handle Sequelize validation errors
  //       const formattedErrors = error.errors.map((err: any) => ({
  //         field: err.path,
  //         message: err.message
  //       }));

  //       res.status(400).json({
  //         success: false,
  //         message: "Validation failed",
  //         errors: formattedErrors
  //       });
  //     } else {
  //       // Log other errors and pass to the global error handler
  //       logger.error(`Error creating employee: ${error.message}`, { stack: error.stack });
  //       next(error);
  //     }


  //     // logger.error(`Error creating employee: ${error.message}`, { stack: error.stack });
  //     // next(error);  // Pass the error to the global error handler
  //   }
  // };


  funcBasicEntry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Access the validated data from req.validatedData
      const validatedReq = req as Request & { validatedData: any };

      // Use validated data for business logic
      const validateData = validatedReq.validatedData;
      
      // Also, retain original data (req.body, req.query, etc.)
      const employeeData = req.body;  // You can access the full data from req
      //console.log(originalData);
      const currentUserId = (req as any).user?.id;

      // Call the service or business logic to create the employee
      const employee = await this.employeeBasicService.funcBasicEntry(employeeData, currentUserId);

      // Return the successful response
      res.status(201).json({ success: true, data: employee });
    } catch (error: any) {
      if (error instanceof ValidationError) {
        // Handle Sequelize validation errors
        const formattedErrors = error.errors.map((err: any) => ({
          field: err.path,
          message: err.message
        }));

        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors
        });
      } else {
        // Log other errors and pass to the global error handler
        logger.error(`Error creating employee: ${error.message}`, { stack: error.stack });
        next(error);
      }
    }
  };


  funcGetEmployeeByEmpCode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

      const { emp_code } = req.body;
      const employee = await this.employeeBasicService.funcGetEmployeeByEmpCode(emp_code);
      res.status(200).json({ employee });

    } catch (error: any) {

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
