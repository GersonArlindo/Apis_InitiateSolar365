"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node_mysql_ts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});
exports.default = db;
/* export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
} */ 
