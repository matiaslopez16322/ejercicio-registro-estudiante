const readlineSync = require('readline-sync');

const {mostrarListaEstudiante} = require('./lista_estudiante');

const registrarEstudiante = () =>{
    const cantidadEstudiantes = readlineSync.question("Ingrese lacantidad de estudiantes a registrar");
    const estudiantes = [];

    for (let i = 0; i < cantidadEstudiantes; i ++) {
        const nombre = readlineSync.question(`Ingrese el nombre del estudiante ${i}:`);
        const edad = readlineSync.question(`ingrese la edad de ${nombre}:`);

        const estudiante = {
            nombre,
            edad
        };;
        estudiantes.push(estudiante);
    }
    mostrarListaEstudiante(estudiantes);
};


//Iniciar el regstro de estudiantes
registrarEstudiante();