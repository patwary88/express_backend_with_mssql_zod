// src/middleware/validateRequest.ts
import { AnyZodObject, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export function validateRequest(
  schema: AnyZodObject,
  source: 'body' | 'query' | 'params' = 'body'
) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Run Zod validation
      const data = await schema.parseAsync(req[source]);
      
      // Store validated data in `req.validatedData`
      (req as any).validatedData = data;

      // Pass the entire req object (original data + validated data) to the next handler
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        // If validation fails, format and return errors
        res.status(400).json({
          errors: err.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      } else {
        next(err);  // Pass any other errors to the global error handler
      }
    }
  };
}
