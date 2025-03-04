import { Request, Response } from 'express';
import SourceEmployeeRawAttendanceData from '../models/mssql/SourceEmployeeRawAttendanceData';

import EmployeeAttendance from '../models/hrm/attendance/EmployeeRawAttendanceData';

export class MSSQLTestController {
  testFetch = async (req: Request, res: Response): Promise<void> => {
    try {
      const sourceRecords = await SourceEmployeeRawAttendanceData.findAll({
        order: [['IndexKey', 'DESC']],
        limit: 50, // fetch a smaller set for testing
      });

      
      console.log(sourceRecords);return;

      res.json(sourceRecords);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
