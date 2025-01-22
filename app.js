// const {crearArchivo} = require('./helper/multiplicar')
// console.clear();

// const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
// const[ , j ]= arg3.split( '=');
// console.log(j);

// //const j = 6;


// crearArchivo(j)
// .then(nombreArchivo => console.log(nombreArchivo,'Creado'))
// .catch(err=> console.log(err))






// hacer la tabla del 5 en javascrip


// const {crearArchivo} = require('./helper/multiplicar');
// const argv = require('yargs').argv;

// console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log('j de yargs:', argv.j);


//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =

//console.log(j);

/* crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log(err)); */

//


const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('./Config/yargs');

const colors = require('colors');

console.clear();
//pag 74
//onsole.log(process.argv);
console.log(argv);
//console.log('Base de yargs:', argv.b);

//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =

//console.log(j);

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));


