const data = require('./data.json');

//console.log(data);

var modifiedData = data.map((person)=>{
    person.first_name = person.first_name.toUpperCase()
    return person
})
//console.log(modifiedData)

// buscar arreglo 
var filterResult = modifiedData.filter((person) => person.id == 3)
console.log(filterResult);
