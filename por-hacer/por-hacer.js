const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error("No se pudo GUARDAR");
    });
};

const cargarBD = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = () => {
    return (listadoPorHacer = require("../db/data.json"));
};

const actualizar = (descripcion, completado) => {
    cargarBD();

    let index = listadoPorHacer.findIndex(
        (tarea) => tarea.descripcion === descripcion
    );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const crear = (descripcion) => {
    cargarBD();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const borrar = (descripcion) => {
    cargarBD();

    let index = listadoPorHacer.findIndex(
        (tarea) => tarea.descripcion === descripcion
    );

    if (index >= 0) {
        // se puede usar filter para eliminar un registro en el array se compara.

        /*
                let nuevoListado = listadoPorHacer.filter(tarea=> {
                    return tarea.descripcion !== descripcion
                });

                if(listadoPorHacer.length === nuevoListado.length){
                    return false;hhhhhhh
                }else{
                    listadoPorHacer=nuevoListado;
                    guardarDB();
                    return true;
                }*/

        //hace lo mismo esta linea de codigo

        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
};