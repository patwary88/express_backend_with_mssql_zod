import { Model, ModelStatic, Op } from 'sequelize';

export const isUnique = async <T extends Model>(
  model: ModelStatic<T>,
  column: string,
  value: any,
  excludeId?: number
): Promise<boolean> => {
  const whereCondition: any = { [column]: value };
  if (excludeId) {
    whereCondition.id = { [Op.ne]: excludeId };
  }
  
  const existingRecord = await model.findOne({ where: whereCondition });
  return !existingRecord;
};
