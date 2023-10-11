"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => ({
    port: parseInt(process.env.PORT, 10) || 8080,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire_time: process.env.JWT_EXPIRE_TIME,
    upload_url: process.env.UPLOAD_URL,
    api: {
        apiUrl: process.env.BASE_URL,
        httpTimeout: 1000,
    },
    mongodb: {
        database: {
            connectionString: process.env.MONGO_DB_URL || 'mongodb://localhost:27017',
            databaseName: process.env.MONGO_DATABASE || 'elvalue-local'
        }
    }
});
exports.config = config;
//# sourceMappingURL=configuration.js.map