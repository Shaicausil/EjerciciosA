const citasMedicas = [];

function programarCita() {
    const nombre = prompt("Ingrese el nombre del paciente:");
    const fecha = prompt("Ingrese la fecha de la cita (formato: Dia/Mes/Año):");
    const hora = prompt("Ingrese la hora de la cita (formato 24 hrs: HH:MM):");
    const medico = prompt("Ingrese el nombre del médico:");

    const cita = {
        nombre: nombre,
        fecha: fecha,
        hora: hora,
        medico: medico
    };

    citasMedicas.push(cita);
    alert("Cita programada con éxito.");
}

function verCitas() {
    if (citasMedicas.length === 0) {
        alert("No hay citas programadas.");
        return;
    }

    citasMedicas.sort((a, b) => {
        if (a.fecha < b.fecha) return -1;
        if (a.fecha > b.fecha) return 1;
        if (a.hora < b.hora) return -1;
        if (a.hora > b.hora) return 1;
        return 0;
    });

    let listadoCitas = "Citas Programadas:\n";
    for (let i = 0; i < citasMedicas.length; i++) {
        listadoCitas += `${i + 1}. Paciente: ${citasMedicas[i].nombre}, fecha: ${citasMedicas[i].fecha}, Hora: ${citasMedicas[i].hora}, Médico: ${citasMedicas[i].medico}\n`;
    }
    alert(listadoCitas);
}

function cancelarCita() {
    verCitas();

    if (citasMedicas.length === 0) return;

    const indice = Number(prompt("Ingrese el número de la cita que desea cancelar:")) - 1;

    if (indice >= 0 && indice < citasMedicas.length) {
        citasMedicas.splice(indice, 1);
        alert("Cita cancelada con éxito.");
    } else {
        alert("Número de cita erroneo.");
    }
}

function main() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt("Seleccione una opción:\n1. Programar Una Cita\n2. Ver Citas Programadas\n3. Cancelar Cita Programada\n4. Salir del Menu");

        switch (opcion) {
            case '1':
                programarCita();
                break;
            case '2':
                verCitas();
                break;
            case '3':
                cancelarCita();
                break;
            case '4':
                continuar = false;
                break;
            default:
                alert("opcion no valida.");
        }
    }
}

main();