import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const isOracle = process.env.DB_TYPE === 'oracle';

let sequelize: Sequelize;

if (isOracle) {
  // Build a complete Oracle connection URI in the following format:
  // oracle://username:password@host:port/service_name
  const connectionUri = `oracle://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE}`;
  
  sequelize = new Sequelize(connectionUri, {
    dialect: 'oracle',
    logging: false,
  });
} else {
  // For MySQL, use the standard constructor
  sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: false,
    }
  );
}

export default sequelize;
