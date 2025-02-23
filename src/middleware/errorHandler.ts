import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logs/logger';


// export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
//   console.error(err.stack);
//   res.status(500).json({ message: err.message || 'Internal Server Error' });
// };
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  // Log the error details
  logger.error(`Error: ${err.message}`, { stack: err.stack, url: req.url, method: req.method });
  res.status(500).json({ message: 'Internal Server Error' });
};