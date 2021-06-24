const express = require("express"); //requiero el paquete express

//genero una aplicacion express
const app = express();
//endpoint
app.get("/", (req, res) => {
  res.send("HOLA MUNDO, con ExpressJs");
});
app.get("/saludo", (req, res) => {
  //req.query
  //console.log(rq.query);
  //obtenemos la query del objeto request
  const {
    query: { nombre, apellido },
  } = req;
  /* segunda forma
  const nombre = req.query.nombre;
  const apellido = req.queery.apellido;
  */

  res.json({
    Saludo: `Hola soy ${nombre} ${apellido}`,
  });
});

app.get("/saludo/:nombre", (req, res) => {
  const {
    params: { nombre },
  } = req ;
  //segunda forma para params: const nombre = req.params.nombre
  res.json({
    nombre:nombre,
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
