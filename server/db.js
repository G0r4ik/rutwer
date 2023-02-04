import * as dotenv from 'dotenv'
dotenv.config()

import pg from 'pg'
const Pool = pg.Pool

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
})

export async function pQuery(query, args = []) {
  try {
    const response = await pool.query(query, [...args])
    return response.rows
  } catch (error) {
    console.log(error)
  }
}
