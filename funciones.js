function suma(num1, num2) {
    console.log(num1 + num2)
}
suma(4, 5)

function cuadrado(a) {
    return a * a
}
console.log(cuadrado(4, 5))

function myName(name) {
    return "¡Hola " + name + "!"
}
console.log(myName("Tania"))

//1. Saber si un numero es par o impar
//2. Cambiar el orden de un array {3,2,1} output {1,2,3} (*) Pregunta en entrevistas de trabajo
//3. Threecompany input: asd output: aaasssddd
//4. Palindromo "ana", "oso", "casa"

function parImpar(a) {
    if (a % 2 == 0) {
        return "Es un número par"
    } else {
        return "No es un número par"
    }
}
console.log(parImpar(4))
console.log(parImpar(8))
console.log(parImpar(-3))
console.log(parImpar(0))

//Tarea: Encontrar números impares y pares en los números del 0 al 100 (For)

//2. Cambiar el orden de un array {3,2,1} output {1,2,3}

function changeArray(elements) {
    var longitud = elements.length
    var newArray = []
    for (var i = 0; i < (longitud - 1); i++) {
        console.log(elements[i])
        newArray.unshift(elements[i])
        console.log("Variable:", i)

    }
    return newArray
}

var array = [3, 17, 25, 1, 50, -3, 11]
console.log(changeArray(array))

//Tarea resolver invertir una array con un solo arreglo

//3. Threecompany input: asd output: aaasssddd
/*
    asd aaasssddd
    yu yyyuuu
    r rrr
*/

function three(cadena) {
    var n = cadena.length
    var output = ""

    for (var i = 0; i < n; i++) {
        var letra = cadena.charAt(i)
        output
    }
    return output
}

console.log(three('casa'))
console.log(three('resa'))
console.log(three('yu'))

//4. Palindromo "ana", "oso", "casa"
/*
input output
casa No es un palindromo
oso Si es un palindromo
ana Si es un palindromo
*/

/* Tarea: Crear una función que regrese la siguiente cadena
input   output
Marcia  una manzana para Marcia y una manzana para mi
Paco    una manzana para Paco y una manzana para mi
""      una manzana para ti y una manzana para mí
*/