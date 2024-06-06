import pg from 'pg';
import 'dotenv/config';
const { Pool } = pg;


const {DB_USER, DB_PASSWORD,DB_PORT, DB_HOST, DB_DATABASE} = process.env;

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST,
    database: DB_DATABASE,
    allowExitOnIdle: true
};

export const pool = new Pool(config);