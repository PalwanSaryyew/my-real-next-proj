import { pool } from "./dbCon.mjs";

export const getEmail = async (email) => {
   const results = await pool.query(
     `SELECT * FROM market.users WHERE email = $1`,
     [email]
   );
   return results.rows[0];
};

export const getPass = async (pass) => {
   const results = await pool.query(
     `SELECT * FROM market.users WHERE password = $1`,
     [pass]
   );
   return results.rows[0];
};

export const createUser = async (user) => {
   const now = new Date()
   const results = await pool.query(
      `INSERT INTO
      market.users
      (username, password, email, role, created_date)
      VALUES
      ($1, $2, $3, $4, $5);`,
      [
         user.username,
         user.password,
         user.email,
         user.role,
         now
      ]
   );
   return results;
};
