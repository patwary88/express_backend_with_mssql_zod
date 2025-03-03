import SourceEmployeeAttendance, { ISourceEmployeeAttendanceAttributes } from '../models/mssql/SourceEmployeeAttendance';
//import { EmployeeAttendanceRepository } from './EmployeeAttendanceService'; // or wherever your repository is
import logger from '../utils/logs/logger';

export class DataTransferService {
  // private attendanceRepository: EmployeeAttendanceRepository;

  // constructor() {
  //   this.attendanceRepository = new EmployeeAttendanceRepository();
  // }

  // This method extracts data from MSSQL and loads it into your primary database
  async transferAttendanceData(): Promise<void> {
    try {
      // Extract data from the MSSQL source
      //const sourceRecords: ISourceEmployeeAttendanceAttributes[] = await SourceEmployeeAttendance.findAll();
      const sourceRecords: ISourceEmployeeAttendanceAttributes[] = await SourceEmployeeAttendance.findAll({
        order: [['id', 'DESC']], // orders records with the latest (highest id) first
        limit: 1000,
      });

      console.log("Fetched MSSQL Data:", JSON.stringify(sourceRecords, null, 2)); return;


      for (const record of sourceRecords) {
        // Optionally transform the record to match your main database schema.
        // For instance, rename keys, format dates, etc.
        const attendanceData = {
          employeeId: record.IndexKey,
          attendanceDate: record.UserID,
          status: record.TransactionTime,
        };

        // Insert the data into your primary database using your repository method.
        // Your repository is already configured for MySQL/Oracle.
        //await this.attendanceRepository.create(attendanceData);
      }

      logger.info(`Data transfer complete. Transferred ${sourceRecords.length} records.`);
    } catch (error: any) {
      logger.error(`Error transferring attendance data: ${error.message}`, { stack: error.stack });
      throw error;
    }
  }
}
