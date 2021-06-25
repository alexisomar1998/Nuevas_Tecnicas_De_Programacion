//traemos el paquete
const { Router } = require("express");

//Inicializamos Router
const router = Router()
//creacion de los endpoint
router
    .get("/",(req, res) => {
    res.send("Hola mundo con ExpressJS");
    }).get("/saludo", (req, res) => {
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
      }).get("/saludo/:nombre", (req, res) => {
        const {
          params: { nombre },
        } = req ;
        //segunda forma para params: const nombre = req.params.nombre
        res.json({
          nombre:nombre,
        });
      })

//Exportamos las ruta
module.exports.RouterIndex = router
