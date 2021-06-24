const express = require('express'); //requiero el paquete express

//genero una aplicacion express 
const app = express()
//endpoint
app.get('/', (req, res) => {
    res.send("HOLA MUNDO, con ExpressJS")
})

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
})
