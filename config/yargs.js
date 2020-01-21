const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer' 
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
            
}

const argv = require('yargs')
    .command('listar', 'Muestra todas las tareas por hacer', descripcion)
    .command('crear', 'Crea un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', descripcion, completado)
    .command('borrar', 'Borra un tarea', descripcion)
    .help()
    .argv;


module.exports = {
    argv
} 