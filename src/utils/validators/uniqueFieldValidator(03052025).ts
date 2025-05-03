// src/utils/validators/uniqueFieldValidator.ts
import { Model, ModelStatic } from 'sequelize';

export async function uniqueFieldValidator<T extends Model>(
  model: ModelStatic<T>,         // concrete model class, e.g. EmployeeBasic
  fields: Array<keyof T['_attributes']>,  // field names to check
  values: any[]                  // corresponding values
): Promise<boolean> {
  const where = {} as Record<string, any>;
  fields.forEach((f, i) => { where[f as string] = values[i]; });
  const found = await model.findOne({ where });
  return found === null;  // true if unique, false if already exists
}
