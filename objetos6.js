const Manager = {
    name: 'Guillermo',
    company: 'Telefonica',
    edad: 32,
    job: 'Software engineer'
}

const Interno = {
    name: 'Paco',
    edad: 21,
    job: 'Ir por los cafes del Starbucks'
}

function sayHi() {
    console.log('Hola, mi nombre es: '.this.name)
}

function miEdad() {
    console.log('Tengo ', this.edad, 'años')
}

Manager.sayHi = sayHi;
Manager.miEdad = miEdad;
Interno.sayHi = sayHi;

Manager.sayHi()
Interno.sayHi()