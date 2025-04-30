// src/middleware/validateRequest.ts
import { AnyZodObject, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export function validateRequest(
  schema: AnyZodObject,
  source: 'body' | 'query' | 'params' = 'body'
) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await schema.parseAsync(req[source]);
      (req as any).validatedData = data;  // Add validated data to req

      next();  // Proceed to next middleware or controller
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({
          errors: err.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      } else {
        next(err);  // Pass other errors to global error handler
      }
    }
  };
}
