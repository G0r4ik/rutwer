import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './router.js'
const app = express()
app.use(express.json())
app.use(router)

const port = process.env.LOCAL_SERVER_PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
