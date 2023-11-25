// const axios = require('axios');
const yargs = require('yargs');
const paisApi = require('./src/paisApi')
const climaApi = require('./src/climaApi')

yargs.command({
    command: 'getClimaByCountry',
    describe: 'Obtener el clima por pais',
    builder: {
        pais: {
            describe: 'pais',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler(argv){
        const ciudad = paisApi.getCiudad(argv.pais);   
        console.log(climaApi.getClima(ciudad))
    }
})



// process.argv[1]
// console.log(process.argv[2]);


// const pais = 'mexico';

// console.log("Hola " + pais);




yargs.parse();