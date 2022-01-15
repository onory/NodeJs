//yargs sirve para ejecutar intruicciones para usar el codigo


const argv = require('yargs')

//se implemente yargs para poder colocar adciones que comprueben la informacion entrante y crear banderas para acciones

.options('t',{ //condiciona alias T
    alias: 'table',
    type:'number',
    demandOption: true, //fuerxa la entrada de tado
    describe:'Base de la tabala de multiplicar'
})
.option('l',{//condiciona alias L
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe:'Muestra tabla en consola'
}).options('H',{ //condiciona hasta q numero se multiplica
    alias: 'hasta',
    type:'number',
    default:10,
    demandOption: true, //fuerza la entrada de tado
    describe:'Numero hasta cual se multiplicara'
})
.check((argv, options)=>{ // valida que el numero sea un numero y no otro tipo de caracter
    if(isNaN(argv.t)){
        throw ' la base tiene que ser un numero'
    }
    return true;
})
.argv;


module.exports = argv; // exportacion de modulo