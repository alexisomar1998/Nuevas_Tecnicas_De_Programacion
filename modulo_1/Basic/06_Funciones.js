// funciones declarativas

function saludar(){
    return "hola soy Alexis"
}
function saludar2(){
console.log("hola soy Omar")
}
//funciones con parametros 
function saludarConParametros(nombre,apellido){
    return `hola soy ${nombre} ${apellido}`
}
// funciones con parametros por defecto
function saludoConProfesion(nombre="Persona",profesion="Analista de Sistema"){
    return `hola ${nombre} mi profesion es ${profesion}`
}
//console.log(saludoConProfesion("alexis","Desarrollo de software"));
//console.log(saludarConParametros("Alexis","Analuisa"));


/*saludar()
var resultado = saludar()
console.log(resultado);
console.log(saludar());
saludar2()
*/
// funcion expresivas - dunciones anonimas
var saludoConEdad = function(){
    return `hola soy ${nombre} y tengo ${edad} años` 
}
//console.log(saludoConEdad("alexis",25));

// ARROW FUNCTIONS - Funciones flechas

var  saludoConApellido = (nombre , apellido) => `hola soy ${nombre} ${apellido}`
var suma=(num1,num2)=>num1+num2
//console.log(saludoConApellido("alexis","analuisa"));
//console.log(suma(2,3));

// Funciones como parametros de otras funciones

function saludoConFunciones(nombre,cb){
    return cb(nombre)
}

var miSaludo = saludoConFunciones ("Alexis",function(nombre){
    return`hola soy ${nombre}`
})
console.log (miSaludo);

var miSaludo2 = saludoConFunciones ("Alexis",(nombre)=>`hola soy ${nombre}`)
//console.log(miSaludo2);
//setTimeout(()=>{
//    console.log ("hola mundo");
//},3000);
 //setInterval(()=>{
   //  console.log("hola mundo")
 //},2000);


