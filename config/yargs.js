const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un nuevo archivo .txt con la tabla base de 1 hasta limite', opts)
    .help()
    .argv;


module.exports = {
    argv
};