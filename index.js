const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/',(req,res,next) => {
  res.send('🦖🔥')
})

app.listen(port, () => {
  console.log(`i got you on ${port}`);
})
