// src/utils/testETL.ts
import * as dotenv from 'dotenv';
dotenv.config();

import SourceEmployeeRawAttendanceData, { ISourceEmployeeRawAttendanceDataAttributes } from '../models/mssql/SourceEmployeeRawAttendanceData';
import EmployeeRawAttendanceData, { IEmployeeRawAttendanceDataAttributes } from '../models/hrm/attendance/EmployeeRawAttendanceData';
import sequelize from '../config/db';          // Target DB (MySQL/Oracle)
import sequelizeMSSQL from '../config/db-mssql'; // Source DB (MSSQL)
import logger from '../utils/logs/logger';

async function testETLProcess(): Promise<void> {
  try {
    // Ensure both databases are connected
    await sequelizeMSSQL.authenticate();
    //console.log("✅ MSSQL connected successfully.");

    await sequelize.authenticate();
    //console.log("✅ Target DB connected successfully.");

    // Step 1: Extract a sample of records from MSSQL (adjust limit as needed)
    const sourceRecords: ISourceEmployeeRawAttendanceDataAttributes[] = await SourceEmployeeRawAttendanceData.findAll({
      order: [['IndexKey', 'DESC']],
      limit: 2, // fetch a batch for testing
    });
    //console.log("Fetched MSSQL Data:", JSON.stringify(sourceRecords, null, 2));

    // Step 2: Transform the data (ensure no id field is passed)
    const transformedRecords: IEmployeeRawAttendanceDataAttributes[] = sourceRecords.map(record => {
      return {
        pid: `${record.UserID}`,
        emp_code: record.UserID,
        dtime: record.TransactionTime,
        ctime: record.TransactionTime,
        shift_policy_id: 0,
        shift_type: 0,
        is_next_day: 0,
        shift_start: record.TransactionTime,
        shift_end: record.TransactionTime,
        overtime_policy_id: 0,
        punch_type: 0,
        is_manual: 0,
        ref_id: 0,
        company_id: 0,
        location_id: 0,
        grace_minutes: 0,
        exit_buffer_minutes: 0,
        entry_restriction_start: 0,
        lunch_break_min: 0,
        dinner_break_min: 0,
        tiffin_break_min: 0,
        ip_address: '127.0.0.1',
        machine_name: 'TestMachine'
      };
    });
   // console.log("Transformed Records:", JSON.stringify(transformedRecords, null, 2));

    // Step 3: Load the transformed data into your target database using bulkCreate
    const insertedRecords = await EmployeeRawAttendanceData.bulkCreate(transformedRecords);
   // console.log(`Inserted ${insertedRecords.length} records into Target DB.`);

    // Step 4: Verify insertion by fetching a sample of records from the target table
    const fetchedTargetRecords = await EmployeeRawAttendanceData.findAll({
      order: [['id', 'DESC']],
      limit: 2,
    });
    //console.log("Fetched Records from Target DB:", JSON.stringify(fetchedTargetRecords, null, 2));

    logger.info(`ETL process complete. Transferred ${sourceRecords.length} records.`);
  } catch (error: any) {
    console.error("Error in ETL process:", error);
    logger.error(`Error in ETL process: ${error.message}`, { stack: error.stack });
  }
}

testETLProcess();
