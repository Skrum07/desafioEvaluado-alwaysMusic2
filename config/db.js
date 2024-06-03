import pg from 'pg';
import 'dotenv';
const { Pool } = pg;


const {DB_USER, DB_PASSWORD,DB_PORT, DB_HOST, DB_NAME} = process.env;

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST,
    database: DB_NAME,
    allowExitOnIdle: true
};

export const pool = new Pool(config);