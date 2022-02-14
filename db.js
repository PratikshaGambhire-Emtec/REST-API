// get the client
const mysql2 = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql2.createPool({
  host: '0.0.0.0',
  port: 3305,
  user: 'root',
  password: '705750',
  database: 'express_main',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

//export the pool for other modules
module.exports=pool