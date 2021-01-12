var texto;
texto = "Servidor off"

if (texto == "Servidor off") {
    console.log("Test passed")
} else {
    console.log("Test failed")
}

var num = 48

if (num < 50) {
    console.log("Número menor")
}

//Tarea: investigar las direncias entre =, == y ===

var num2 = 48
var foo = 7
var bar = 5

if (num <= num2 && foo > bar) {
    console.log("Passed AND")
}

if (num < num2 || foo > bar) {
    console.log("Passed OR")
}

//Ejemplo con If con un false

var notTrue = false
if (!notTrue) {
    console.log("El valor es: " + notTrue)
}

//Ejemplo Switch

var rango = "Coronel"

switch (rango) {
    case "Soldado razo":
        console.log("No autorizado")
    case "Comandante":
        console.log("Necesita autorización")
    case "Capitán":
        console.log("Autorización requerida")
    case "General":
        console.log("Usuario autorizado")
    default:
        console.log("Resultado default: Usuario no autorizado")
        break;
}

var opciones = 43
switch (this.opciones) {
    case 2:
        console.log("No autorizado")
    case 43:
        console.log("Necesita autorización")
    case 54:
        console.log("Autorización requerida")
    case "Error":
        console.log("Usuario autorizado")
    default:
        console.log("Resultado default: Usuario no autorizado")
        break;
}

var dealer = 4
var x = this.dealer;
switch (true) {
    case (dealer < 5):
        console.log("less than five")
        break;
    case (x < 9):
        console.log("between 5 and 8")
        break;
    case (x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("None");
        break;

}


//Tarea: Investigar/Hacer un ejemplo un switch con rango de números


//Ejemplo de función
function myFunction(myArgument, myArgument2) {
    return myArgument + myArgument2

}
console.log(myFunction(5, 8))


//Tarea función
checkNumber(42)

function checkNumber(myNumber) {
    if (myNumber == 42) {
        console.log('Correcta')
    } else {
        console.log('Incorrecto')
    }

}