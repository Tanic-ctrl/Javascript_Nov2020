//Variables y constantes
var arbol = "Sauce";
var nombre = "Tania";
var apellido = "Radilla"
var edad = 28
var miNumero = true
console.log(arbol, nombre, apellido, edad)

edad = "Casa"
console.log(miNumero)
console.log(arbol, nombre, apellido, edad)

const accesorio = "Laptop"
console.log(accesorio)

//No va a cambiar porque es una constante
//accesorio = "Casitas"
//console.log(accesorio)

//Arrays
console.log("Arrays")
var dogs = ['Rex', 'Toby', 9];
console.log(dogs)
    //dogs[3] = true

//console.log(dogs)
//console.log(dogs[2])

dogs = true
console.log(dogs)

//Variables nulas, falsas y vacias
var emptyVariable = null
console.log(emptyVariable)

var emptyVariable = false
console.log(emptyVariable)

console.log("Arrays vacio vs undefined")
var vaciaVariable
console.log(vaciaVariable)

var miStack = []
console.log(miStack)

//Se puede especificar que el array esta vacio
var miStack2 = [, ]
console.log(miStack2)

//Push los ordena en una pila, los va agregando en la siguiente posición libre
console.log("Ordenar un array")
miStack.push(123456789)
miStack.push("arbol")
miStack.push(false)

console.log(miStack)

console.log("Eliminar un elemento utilizando pop")
    //con pop se quita el ultimo elemento del array
console.log(miStack.pop())
console.log(miStack)
console.log("Eliminar un elemento utilizando shift")
    //Con shift se quita el primer elemento del array
console.log(miStack.shift())
console.log(miStack)

console.log("Eliminar un elemento utilizando splice")
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 2);

console.log(splice)
console.log(myArray)

console.log("Constantes para arrays")
    //Constantes para arrays 
const constArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(constArray)
console.log(constArray.pop())
console.log(constArray)

console.log("Reemplazando un elemento en el espacio asignado en el array")
    //Para reemplazar un elemento en el espacio asignado en el array
constArray[0] = "Cadena"
console.log(constArray)

console.log("Multilineas")
    //Múltilineas
console.log("Linea 1 \n \nLinea 3")
console.log("Linea 4")

console.log("Arreglos con elementos vacíos")
    //Arreglos con elementos vacíos
var arreglo21 = []
arreglo21[5] = 8
console.log(arreglo21)
console.log(arreglo21.shift())
console.log(arreglo21)
console.log(arreglo21[0])
arreglo21.push(2)
console.log(arreglo21)
arreglo21[0] = 81
console.log(arreglo21)
arreglo21.push(3)
console.log(arreglo21)
    //Agregando un elemento al inicio del array
arreglo21.unshift(82)
console.log(arreglo21)