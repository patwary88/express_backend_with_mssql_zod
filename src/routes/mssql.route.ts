import { Router } from 'express';
import { MssqlController } from '../controllers/MssqlController';
import { body } from 'express-validator';

const router = Router();
const mssqlController = new MssqlController();

router.get('/raw-data', mssqlController.funcGetRawData);

export default router;