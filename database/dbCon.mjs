import mysql from "mysql2/promise";

export const pool = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "root",
   database: "parketplace",
});

/* try {
   const [results, fields] = await connection.query(
      'SELECT * FROM `users` WHERE `username` = "men"'
   );

   console.log(results); // results contains rows returned by server
   console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
   console.log(err);
} */


/*   try {
    const [results] = await connection.query(
      'SELECT * FROM `users` WHERE `username` = ?',
      ['men']
    );
  
    console.log(results);
  } catch (err) {
    console.log(err);
  } */


