const express = require('express')

const app = express()

app.get('/', (req, res) =>{
  res.end("Hello Word")
})

app.listen(process.env.PORT || 3000)