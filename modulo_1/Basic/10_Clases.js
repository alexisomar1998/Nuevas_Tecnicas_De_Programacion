//como se gacia antes
function Rectangulo(base,altura){
    this.base = base
    this.altura = altura 
}

Rectangulo.prototype.calcularArea = function (){
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6,3)
//console.log(rectangulo.calcularArea());

// Declaracion de clases

class Rectangulo2 {
    constructor(base,altura){
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }
}
var rectangulo2 = new Rectangulo2(6,3)
//console.log(rectangulo2.calcularArea());

/*DEBER
//Clase Persona
function datos(nombre,apellido, edad){ 
   	this.nombre = nombre
    this.apellido=apellido 
   	this.edad = edad 
}
misDatos =new datos("Alexis","Analuisa",22)
console.log(misDatos);
*/
/*implementar getters,setter y realizar una implementacion
const obj = {
    get prop() {
      return this.__prop__;
    },
    set prop(value) {
      this.__prop__ = value * 2;
    },
  };
  
  obj.prop = 12;
  
  console.log(obj.prop); //24
*/ 
/*implementar metodos estaticos _ clase punto, function distancia
class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2)); 

*/
/*Construir clase Persona y estudiante,extender estudiante con persona
function datos(nombre,apellido, edad){ 
    this.nombre = nombre
   this.apellido=apellido 
    this.edad = edad 
}
function estudiante(instituto,carrera,nivel){
     this.instituto=instituto
     this.carrera=carrera
     this.nivel=nivel
}

misDatos =new datos,estudiante("Alexis","Analuisa",22,"itq","analisis de sistem",5);
*/