import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const sequelizeMSSQL = new Sequelize(
  process.env.MSSQL_DB_NAME!, 
  process.env.MSSQL_DB_USER!, 
  process.env.MSSQL_DB_PASSWORD!, 
  {
    host: process.env.MSSQL_DB_HOST,
    port: process.env.MSSQL_DB_PORT ? parseInt(process.env.MSSQL_DB_PORT, 10) : 1433,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,                  // if needed (e.g., for Azure)
        trustServerCertificate: true,   // set to true if you're not using valid certificates
      }
    },
    logging: false,
  }
);

export default sequelizeMSSQL;
