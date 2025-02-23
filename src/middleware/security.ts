import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import cors from 'cors';
import { Express } from 'express';

export const securityMiddleware = (app: Express): void => {
  app.use(helmet());
  app.use(cors());
  app.use(xss());
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  });
  app.use(limiter);
};
