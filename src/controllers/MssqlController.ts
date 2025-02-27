import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { MssqlService } from '../services/MssqlService';
import { sql, poolPromise } from "../config/mssqldb";
export class MssqlController {
  private mssqlService: MssqlService;

  constructor() {
    this.mssqlService = new MssqlService();
  }

  funcGetRawData = async (req: Request, res: Response): Promise<any> => {


    try {
      const pool = await poolPromise; // Now properly typed
      const result = await pool.request().query("SELECT TOP (1000) * FROM NGAC_AUTHLOG ");
      console.log(result);return;

      res.json(result.recordset);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Database query failed" });
  }


    //const RawData =  await this.mssqlService.getDataList();
  }

}
