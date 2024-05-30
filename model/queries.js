import { pool } from "../config/db.js";


//ADD USERS
const addUserQuery = async(name, rut, course, level) => {
    try {
        const sql = {
            text: 'INSERT INTO users (name, rut, course, level) VALUES ($1, $2, $3, $4) RETURNING *',
            values: [name, rut, course, level]
        }
        const response = await pool.query(sql);

        console.log(response);
        if(response.rowCount > 0) return response.rows[0];

    } catch (error) {
        console.log(`Error code: ${error.code}, Error message: ${error.message}`);
    }
};

export { addUserQuery };