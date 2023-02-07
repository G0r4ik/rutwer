import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './router.js'
import cors from 'cors'
const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())
app.use(router)
const port = process.env.LOCAL_SERVER_PORT || 3000
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })
// app.use(cors(cors({ origin: 'http://localhost:5173' })))

// app.use(
//   cors({
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//   })
// )
app.listen(port, () => {
  console.log(`Example app listening on port ${port} `)
})
