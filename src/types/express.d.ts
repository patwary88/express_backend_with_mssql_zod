// src/types/express.d.ts
declare namespace Express {
  export interface Request {
    validatedData: any;  // Type for validatedData, replace 'any' with a more specific type if needed
  }
}
