import SourceEmployeeAttendance, { ISourceEmployeeRawAttendanceDataAttributes } from '../models/mssql/SourceEmployeeRawAttendanceData';
import EmployeeAttendance, { IEmployeeRawAttendanceDataAttributes } from '../models/hrm/attendance/EmployeeRawAttendanceData'; // This is your target model in MySQL/Oracle
import sequelize from '../config/db'; // Sequelize instance for target database
import logger from '../utils/logs/logger';

export class DataTransferService {
  // Transformation function: convert source record to target record structure.
  private transformRecord(record: ISourceEmployeeRawAttendanceDataAttributes): ISourceEmployeeRawAttendanceDataAttributes {
    // Apply your business logic and mapping here.
    // For example, suppose:
    // - Source field 'IndexKey' maps to target 'employeeId'
    // - 'TransactionTime' maps to target 'attendanceDate'
    // - 'UserID' (from MSSQL) might be transformed or used in a business rule to determine status.
    return {
      pid: record.UserID,  // or another mapping if needed
      attendanceDate: record.TransactionTime,
      status: record.UserID ? "present" : "absent",  // example business logic: if UserID exists, mark as "present"
    };
  }

  // Main ETL method for bulk data transfer
  async transferAttendanceData(): Promise<void> {
    try {
      // Step 1: Extract source records from MSSQL
      const sourceRecords: ISourceEmployeeRawAttendanceDataAttributes[] = await SourceEmployeeAttendance.findAll({
        order: [['IndexKey', 'DESC']],
        limit: 100, // process in batches if needed
      });

      if (!sourceRecords.length) {
        logger.info("No source records found.");
        return;
      }

      // Step 2: Transform the records
      const transformedRecords: IEmployeeRawAttendanceDataAttributes[] = sourceRecords.map(record => {
        return this.transformRecord(record);
      });

      // Step 3: Bulk insert the transformed records into the target database using a transaction
      await sequelize.transaction(async (transaction) => {
        await EmployeeAttendance.bulkCreate(transformedRecords, { transaction });
      });

      logger.info(`Data transfer complete. Transferred ${transformedRecords.length} records.`);
    } catch (error: any) {
      logger.error(`Error transferring attendance data: ${error.message}`, { stack: error.stack });
      throw error;
    }
  }
}
