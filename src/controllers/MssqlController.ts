import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { MssqlService } from '../services/MssqlService';

export class MssqlController {
  private mssqlService: MssqlService;

  constructor() {
    this.mssqlService = new MssqlService();
  }

  funcGetRawData = async (req: Request, res: Response): Promise<void> => {

    console.log(req);return;
    const RawData =  await this.mssqlService.getDataList();
  }

}
