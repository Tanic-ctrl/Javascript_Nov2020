//For

// var i;
// for (i = 0; i < 3; i = i + 1) {
//     console.log("Valor: ", i)
// }

//Refactorizando el For


for (var i = 0; i < 3; i++) {
    console.log("Valor: ", i)
}

//Array

var arreglo = ['a', 'b', 'c']
var texto = "Javascript"
var numero = '020940950906'
console.log(arreglo.length)
console.log(texto.length)
console.log(numero.length)

for (var i = 0; i < arreglo.length; i++) {
    console.log("El elemento del arreglo es: " + arreglo[i] + " con el indice: " + i)
}

// While

var cervezas = 99;
while (cervezas > 0) {
    console.log("Aún hay " + cervezas + " en el refri, sigue la fiesta")
    cervezas -= 1
}