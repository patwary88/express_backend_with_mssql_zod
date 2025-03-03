import { Router } from 'express';
import { MSSQLTestController } from '../controllers/MSSQLTestController';

const router = Router();
const testController = new MSSQLTestController();

// Create an endpoint to test MSSQL fetch
router.get('/test-mssql', testController.testFetch);

export default router;
