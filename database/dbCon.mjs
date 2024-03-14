import pg from 'pg'

export const pool = new pg.Pool({
  connectionString: 'postgres://postgres:root@localhost:5432/postgres',
});

pool.connect((err)=>{
   if (err) {
      console.log('connection db error', err.stack);
   }else{
      console.log(' dbconnected');
   }
})
