/*
-- Promesas
*/
function promesa(bandera){
    return new Promise((resolve,reject) => {
        if(bandera){
        setTimeout(()=>{
            resolve("Peticion resuleta");
        },3000);
    }else{
        reject ("la operacion fallo")
    }
        
    })
}

/*promesa(true)
    .then((resultado)=> {
        console.log("Respuesta positiva",resultado)
    })
    .catch((error)=> {
        console.log("ERROR",error);
    })

*/


var segundaPromesa = (bandera) => new Promise((resolve,reject)=>{
    if(bandera){
        setTimeout(()=>{
            resolve("Peticion resuleta");
        },3000);
    }else{
        setTimeout(()=>{

        
        reject ("la operacion fallo")
        },2000);
    }
        
})

segundaPromesa(true)
.then((respuesta)=>{
    console.log(respuesta);
})
.catch((error)=>{
    console.log(error);
})

promesa(true)
.then((respuesta)=>{// respuesta de lis de clinetes
    console.log(respuesta)
    return segundaPromesa (true) //compra del cliente 
})
.then ((respuesta)=>{ //respuesta de lasegunda compra
    console.log(respuesta);
})
.catch((error)=>{
    console.log(error)
})











