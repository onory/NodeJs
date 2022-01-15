

const { option, options } = require('yargs');
const { crearARchivo}= require('./helpers/multiplicar'); // importa el metodo que crea el archivo
const argv = require('./config/yargs'); // importacion de yargs
const colors = require('colors'); // importa npm colors

console.clear();

console.log(process.argv);
console.log(argv);
console.log('table: yargs',argv.table);


crearARchivo(argv.t, argv.l, argv.h) // funcion que envia argumentos para jecutar en help/multiplicar
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));



/*desde consola lee el balor de tabla para usar para multiplicar
//node app --5
const [,,arg3 = 'tabla=5'] = process.argv;
const [, tabla =5] = arg3.split('=');


//const tabla = 2;

crearARchivo(tabla)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));
*/
