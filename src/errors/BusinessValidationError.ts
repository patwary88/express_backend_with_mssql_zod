export class BusinessValidationError extends Error {
    public errors: { field: string; message: string }[];
  
    constructor(errors: { field: string; message: string }[]) {
      super("Business validation failed");
      this.errors = errors;
      // Maintain proper stack trace (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, BusinessValidationError);
      }
    }
  }
  