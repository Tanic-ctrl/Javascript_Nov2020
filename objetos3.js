function Car(marca, modelo, anio) {
    //this hace referencia al objeto actual 
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

console.log(Car)
    // Posteriormente se le crea una nueva instancia 
var miCoche = new Car('Seat', 'Leon', 2020)
console.log(miCoche)

var otroCoche = new Car('Nissan', 'Platina', 1980)
console.log(otroCoche)

var elotroCoche = new Car('Nissan', 'Platina', 1980)
console.log(elotroCoche)

//un objeto puede tener asignada otro objeto

function Persona(nombre, edad, genero) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
}

var maria = new Persona('Maria', 20, 'Mujer')
var marifer = new Persona('Maria Fernanda', 27, 'Mujer')

function auto(marca, modelo, anio, owner) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.ownder = owner;
}

var car54 = new auto('Seat', 'Cupra', 2019, maria)
var car52 = new auto('VW', 'Bocho', 2019, marifer)

car54.color = 'Azul marino'
console.log(car54)

console.log(car52)

//Tarea: Crear objeto "Casa", con objetos "Personas", colocar objetos dentro de objetos