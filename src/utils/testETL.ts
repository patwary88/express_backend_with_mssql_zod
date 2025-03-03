// src/utils/testETL.ts
import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import SourceEmployeeAttendance, { ISourceEmployeeAttendanceAttributes } from '../models/mssql/SourceEmployeeAttendance';
// Import your ETL service (if you want to run full ETL)
import { DataTransferService } from '../services/DataTransferService';
import logger from '../utils/logs/logger'; // Ensure you have your logger set up

// A manual ETL function to test fetching data from MSSQL.
async function testMSSQLData() {
  try {
    // Fetch up to 1000 records from MSSQL, ordered descending by id
    const sourceRecords: ISourceEmployeeAttendanceAttributes[] = await SourceEmployeeAttendance.findAll({
      order: [['IndexKey', 'DESC']],
      limit: 1000,
    });

    // Log the fetched data to the console in formatted JSON
    console.log("Fetched MSSQL Data:", JSON.stringify(sourceRecords, null, 2));

    // Optionally, if you want to run the full ETL process (insert data into your primary DB),
    // you can uncomment the following lines:
    /*
    const dataTransferService = new DataTransferService();
    await dataTransferService.transferAttendanceData();
    console.log("Data transfer complete.");
    */

  } catch (error: any) {
    logger.error(`Error in ETL process: ${error.message}`, { stack: error.stack });
    console.error("Error fetching MSSQL data:", error);
  }
}

// Execute the test function
testMSSQLData();
