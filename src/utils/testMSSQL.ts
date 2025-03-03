import sequelizeMSSQL from '../config/db-mssql';

const testMSSQLConnection = async () => {
  try {
    await sequelizeMSSQL.authenticate();
    console.log('✅ MSSQL Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to MSSQL:', error);
  }
};

testMSSQLConnection();
