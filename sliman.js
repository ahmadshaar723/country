const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send("[{'name':'raghad','laname':'samrut'},{'name':'yehya','laname':'hamoud'},{'name':'ahmad','laname':'shaar'}")
})
 
app.listen(3000)