import { Request, Response } from 'express';
import SourceEmployeeAttendance from '../models/mssql/SourceEmployeeAttendance';

export class MSSQLTestController {
  testFetch = async (req: Request, res: Response): Promise<void> => {
    try {
      const sourceRecords = await SourceEmployeeAttendance.findAll({
        order: [['IndexKey', 'DESC']],
        limit: 1000, // fetch a smaller set for testing
      });
      res.json(sourceRecords);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
