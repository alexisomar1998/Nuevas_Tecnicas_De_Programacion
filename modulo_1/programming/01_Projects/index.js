const express = require("express"); //requiero el paquete express
const { Router } = require('express');
//genero una aplicacion express
const app = express();
//router
const { RouterIndex } = require('./routes/index')
//app.use("/", RouterIndex)
// app.use("/user", RouterIndex)
app.use("/user/data", RouterIndex)

/*
        "/"+"/"="//" => "/"
        "/"+"saludo" = "//Saludo" => "/saludo"
        "/"+ "'/saludo/:nombre'" = //saludo/:nombre => "/saludo/:nombre"
        "/user" + "/saludo" = "/user/saludo"
        "user/data" + "/saludo" = "/user/data/saludo"
*/
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
