const banco = [];
let colaEspera = [1,2];
let contadorTurnos = colaEspera[colaEspera.length - 1];

function tomarTurno() {
    contadorTurnos++;
    colaEspera.push(contadorTurnos);
    alert(` Hola, bienvenido/a al banco MaxAhorro. Usted ha tomado el turno número: ${contadorTurnos}`);
    mostrarContadorTurnos()
}
tomarTurno()


function espera() {
    if (colaEspera.length > 0) {
        alert(` Clientes en la cola de espera: ${colaEspera.join(', ')}`); 
    } else {
        alert("No hay clientes en la cola de espera.");
    }
}

espera();

function llamarCliente() {
    if (colaEspera.length > 0) {
        const turnoLlamado = colaEspera.shift();
        alert(`Cliente con el turno número ${turnoLlamado}, por favor acérquese. `);
    } else {
        alert("No hay clientes en la cola de espera.");
    }
}

llamarCliente()

espera()

function mostrarContadorTurnos() {
    alert( ` Hasta ahora se han tomado ${contadorTurnos} turnos.`);
}

mostrarContadorTurnos()