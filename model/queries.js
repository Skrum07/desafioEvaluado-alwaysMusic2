import { pool } from "../config/db.js";

const client = await pool.connect();
if(client) {
    console.log('Database connected!');
} else {
    console.log('Database NOT connected!');
} ;

//ADD USERS
const addUserQuery = async(name, rut, course, level) => {
    try {
        const sql = {
            text: 'INSERT INTO users (name, rut, course, level) VALUES ($1, $2, $3, $4) RETURNING *',
            values: [name, rut, course, level]
        }
        const response = await pool.query(sql);

        if(response.rowCount > 0) return response.rows[0];

    } catch (error) {
        console.log(`Error code: ${error.code}, Error message: ${error.message}`);
    }
};

//Consultar estudiantes registrados
const getUsersQuery = async () => {
    try {
      const sql = {
        text: "select * from users",
        rowMode: "array", //Da formato de arreglo a la respuesta
        
      };
  
      const response = await pool.query(sql);
      if (response.rowCount > 0) return response.rows;

    } catch (error) {
      console.log(`Error: ${error.code}, Error Message: ${error.message}`);
    }
  };
//Consultar estudiantes por rut
  const getUserByRutQuery = async (rut) => {
    try {
      const sql = {
        text: "SELECT * FROM users where rut = $1",
        values: [rut],
      };
  
      const response = await pool.query(sql);
  
      if (response.rowCount > 0) {
        return response.rows;
      } else {
        return "User not found";
      }
    } catch (error) {
      console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
    }
  };
  
  //Actualizar info de un estudiante
  const updateUserQuery = async (name, rut, course, level, id) => {
    try {
      const sql = {
        text: "UPDATE users SET name = $1, rut = $2, course = $3, level = $4 WHERE id = $5 returning *",
        values: [name, rut, course, level, id],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) return response.rows[0];
    } catch (error) {
      console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
    }
  }
  
  //Eliminar un estudiante
  const deleteUserQuery = async (id) => {
      try {
        const sql = {
          text: "DELETE FROM users WHERE id = $1 RETURNING *",
          values: [id],
        };
        const response = await pool.query(sql);
        if(response.rowCount > 0) return response.rows
      } catch (error) {
        console.log(`Error Code: ${error.code}, Error Message: ${error.message}`);
      }
    };
  
  export { addUserQuery, getUsersQuery, getUserByRutQuery, updateUserQuery, deleteUserQuery };