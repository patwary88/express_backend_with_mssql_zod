import app from './app';
import sequelize from './config/db';
import EmployeeRawAttendanceData from './models/hrm/attendance/EmployeeRawAttendanceData';
const PORT = process.env.PORT || 5000;

// sequelize.sync().then(() => {
//   console.log('Database connected');
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
