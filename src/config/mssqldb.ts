import sql from "mssql"; // Use default import when esModuleInterop is enabled

// SQL Server Configuration
const config: sql.config = {
    user: "Uid",
    password: "Gms@p2024#",
    server: "182.163.121.246\sql2022,4370", // Example: "localhost"
    database: "NitgenAccessManager",
    options: {
        encrypt: true, // Needed for Azure
        trustServerCertificate: true, // Trust self-signed certificates
    },
};

// Create a database connection pool
const poolPromise: Promise<sql.ConnectionPool> = new sql.ConnectionPool(config)
    .connect()
    .then((pool: sql.ConnectionPool) => {
        console.log("Connected to SQL Server");
        return pool;
    })
    .catch((err: Error) => {
        console.error("Database connection failed!", err);
        throw err;
    });

export { sql, poolPromise };
