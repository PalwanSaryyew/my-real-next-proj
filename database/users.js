import { pool } from "./dbCon.mjs";

export const getEmail = async (email) => {
   const [results] = await pool.query(
      `SELECT * FROM users WHERE email = ?`,
      [email]
   );
   return results[0];
};

export const getPass = async (pass) => {
   const [results] = await pool.query(
      `SELECT * FROM users WHERE password = ?`,
      [pass]
   );
   return results[0];
};

export const createUser = async (user) => {
   //console.log(user);
   const [results] = await pool.query(
      `INSERT INTO
      users
      (username, password, email, phone_number)
      VALUES
      (?,?,?,?);`,
      [
         user.username,
         user.password,
         user.email,
         user.phone_number
      ]
   );
   return results;
};
