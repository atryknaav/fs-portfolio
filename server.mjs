import express from 'express'
const app = express()
const port = 300


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})