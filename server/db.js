import * as dotenv from 'dotenv'
dotenv.config()

// const Pool = require('pg').Pool
import pg from 'pg'
const Pool = pg.Pool

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
})

export default pool
