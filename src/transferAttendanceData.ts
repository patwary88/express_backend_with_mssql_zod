import app from './app';
import sequelize from './config/db';
import { DataTransferService } from './services/DataTransferService';

const PORT = process.env.PORT || 5000;

sequelize.sync().then(async () => {
  console.log('Main Database connected');

  // Optionally, run the data transfer process on startup:
  const dataTransferService = new DataTransferService();
  await dataTransferService.transferAttendanceData();
  //console.log(sourceRecords);return;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
