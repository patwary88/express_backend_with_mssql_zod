import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes';
import employeeRoutes from './routes/employee.routes';
import MssqlRoutes from './routes/mssql.route';
import { errorHandler } from './middleware/errorHandler';
import { securityMiddleware } from './middleware/security';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// Apply security middleware
securityMiddleware(app);

// User routes
app.use('/api/users', userRoutes);
// User routes
app.use('/api/employee', employeeRoutes);

app.use('/api/attendance', MssqlRoutes);

// Global error handler (should be the last middleware)
app.use(errorHandler);

export default app;
