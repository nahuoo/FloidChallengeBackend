const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  console.log('hola')
  res.send('express')
})

app.listen(port, () => {
  console.log(`[server]: server is running at https://localhost:${port}`)
})
