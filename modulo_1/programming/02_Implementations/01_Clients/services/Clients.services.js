const { MongoConnection } = require("../lib/Mongo");

//Collection
const COLLECTION = "clients";

const findUsers = () =>
  new Promise(async (resolve, reject) => {
    try {
        //Inicializo mongoclients para qie me retorno la
    //configuracion de la db
    const DB = await MongoConnection();
    //obtenemos la collection
    const clients = DB.collection(COLLECTION);
    const clientsList = await clients.find({}).toArray();
    resolve(clientsList);
    } catch (error) {
        reject(error);
    }
   
  });

  module.exports={
      findUsers,
  }
