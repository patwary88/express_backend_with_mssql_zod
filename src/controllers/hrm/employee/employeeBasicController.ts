import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { EmployeeBasicService } from '../../../services/hrm/employee/EmployeeService';
export class employeeBasicController {

    public employeeBasicService: EmployeeBasicService;
    
      constructor() {
        this.employeeBasicService = new EmployeeBasicService();
      }

    funcBasicEntry = async (req: Request, res: Response): Promise<void> => {
        const errors = validationResult(req);
        //console.log(errors);return;
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        try{
          const currentUserId = (req as any).user.id;
          const employeeData = req.body;
          //console.log(currentUserId);return;
          //  const { first_name, last_name } = req.body;
            
            const employee = await this.employeeBasicService.funcBasicEntry(employeeData, currentUserId);
            res.status(201).json(employee);

        }catch (error: any) {
          res.status(500).json({ message: error.message });
        }
    }

    funcGetEmployeeByEmpCode = async (req: Request, res: Response): Promise<void> => {
     

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }
      try {

        const { emp_code } = req.body;
        const employee = await this.employeeBasicService.funcGetEmployeeByEmpCode(emp_code);       
        res.status(200).json( {employee} );

      }catch (error: any) {
        res.status(500).json({ message: error.message });
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

      
      const updateData = req.body;
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
        const employees = await this.employeeBasicService.getAllEmployees();
        res.json(employees);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };
    
    
}