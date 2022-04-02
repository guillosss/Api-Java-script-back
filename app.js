const express = require('express')
const app = express()

app.get('/api/v1/sabado/', function (req, res) {
  res.send('Hola juan')
})

app.listen(3000,()=>{
    console.log("Servidor encendido")
})