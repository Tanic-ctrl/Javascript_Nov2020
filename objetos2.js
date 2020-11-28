var miCoche = new Object();

//Propiedades del objeto
miCoche.marca = 'Ford'
miCoche.modelo = 'Mustang'
miCoche.year = 1970
miCoche.color = 'rojo'

//console.log(miCoche)
//console.log(miCoche.llantas = 4)


//otra forma de extraer la información del objeto (propiedad del objeto)
//console.log(miCoche.marca)
//console.log(miCoche['marca'])


var objetoExe = new Object();

var cadena = 'String'
var random = Math.random();
var obj = new Object

objetoExe.type = "Referencia a propiedades de punto"
objetoExe['fecha'] = 'Referencia a corchetes y espacios'
objetoExe[cadena] = 'Esta es referencia a una variable string'
objetoExe[random] = 'Referencia a una variable númerica'
objetoExe[obj] = 'Referencia a otro objeto'

//console.log(objetoExe)

console.log(Object.getOwnPropertyNames(objetoExe))
console.log(Object.keys(objetoExe))

function mostrarProps(obj, objName) {
    var resultado = '';
    for (var i in obj) {
        if (obj.hasOwnProperty(i));
        //result += ${objName}'. ${i} 


    }
}

console.log(mostrarProps(objetoExe, 'objetoExe'))