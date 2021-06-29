

function DataValidator(check = "query",Schema){
    return (req,res,next)=>{
        var data = req[check]
        const {error,value}= Schema.validate(data)

        if(error){
            res.status(406).json({
                msg:error.details[0].message,
            })
        }else{
            req[check]= value
            next()
        }
    }
}


//function DataValidator (req,res,next){
  //  req.pruebaDeMiddleware="Hola mundo con middlewares"
    //next()
//}

module.exports.DataValidator=DataValidator;