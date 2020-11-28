function displayCar() {
    var impresion = `Un coche ${this.year} ${this.modelo}`
    console.log(impresion)
}

function carrito(marca, modelo, year, owner) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.ownder = owner;
    this.displayCar = displayCar;
}

var maria = new Persona('Maria', 20, 'Mujer')
var car12 = new carrito('Audi', 'A3', 2015, maria)

car12.displayCar();