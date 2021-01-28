const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea",
};

const descripcion = {
    alias: "d",
    demand: true,
    desc: "Descripcion de la tarea por hacer",
};

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion,
        limite: {
            alias: "l",
            default: 10,
        },
    })
    .command("actualizar", "Actualiza el estado COMPLETADO de una tarea", {
        descripcion,
        completado,
    })
    .command("borrar", "borrar una tarea", {
        descripcion,
    })
    .help().argv;

module.exports = {
    argv,
};

module.exports = {
    argv,
};