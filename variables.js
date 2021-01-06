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
console.log("..... Arrays")
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

console.log("..... Arrays vacio vs undefined")
var vaciaVariable
console.log(vaciaVariable)

var miStack = []
console.log(miStack)

//Push los ordena en una pila, los va agregando en la siguiente posición libre
console.log("..... ordenar array")
miStack.push(123456789)
miStack.push("arbol")
miStack.push(false)

console.log(miStack)

console.log("..... eliminar un elemento utilizando pop")
    //con pop se quita el ultimo elemento del array
console.log(miStack.pop())
console.log(miStack)
    //Con shift se quita el primer elemento del array
console.log(miStack.shift())
console.log(miStack)

console.log("..... utilizando splice")
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 2);

console.log(splice)
console.log(myArray)