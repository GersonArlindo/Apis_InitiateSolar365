import { createPool, Pool } from 'mysql2/promise'
import {Sequelize} from "sequelize";

const db = new Sequelize('node_mysql_ts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

export default db;
/* export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
} */