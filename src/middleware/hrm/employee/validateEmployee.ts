import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationError } from 'joi';

export const validateRequest = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Validate using Joi with abortEarly set to false to collect all errors
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error: any) {
      if (error instanceof ValidationError) {
        const errors = error.details.map((err) => ({
          field: err.context?.key,
          message: err.message,
        }));
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors,
        });
        return;
      }
      next(error);
    }
  };
};
