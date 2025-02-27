//import { UserRepository } from '../repositories/UserRepository';
import logger from '../utils/logs/logger';
import { sql, poolPromise } from "../config/mssqldb";
export class MssqlService {

    // async getDataList(): Promise<any> {

    //     try {
    //         const pool = await poolPromise; // Now properly typed
    //         const result = await pool.request().query("SELECT * FROM Users");
    //         res.json(result.recordset);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ error: "Database query failed" });
    //     }

    // }
}