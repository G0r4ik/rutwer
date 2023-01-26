// require('dotenv').config()
// const cookieParser = require('cookie-parser')
// const cors = require('cors')
// app.use(cookieParser())
// app.use(cors({ credentials: true, origin: [url.client] }))
// const express = require('express')
import express from 'express'
import router from './router.js'
const app = express()
const port = process.env.PORT || process.env.LOCAL_SERVER_PORT || 3000
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
