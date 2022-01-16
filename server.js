
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/binh-minh', (req, res) => {
    res.send('Chao Binh Minh')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})