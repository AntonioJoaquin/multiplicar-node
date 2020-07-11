const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    if (!Number(base)) {
        console.log(`${base} no es un numero`);
    } else if (!Number(limite)) {
        console.log(`${limite} no es un numero`);
    } else if (limite < 1) {
        console.log(`${limite} no puede ser menor que 1`);
    } else {
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`${limite} no es un numero`);
            return;
        } else if (limite < 1) {
            reject(`${limite} no puede ser menor que 1`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla
};