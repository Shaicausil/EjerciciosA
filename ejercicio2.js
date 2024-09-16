let habitacionIndividual = [];
let habitacionDoble = [];
let habitacionFamiliar = [];

Alert(`Hola, bienvenido/a al hotel el descanso`);

let reserva = confirm(`¿Desea reservar una habitación?`);
let numero = Number(prompt(`¿Cuantas Personas son?`));
let mascota = prompt(`¿Trae mascotas?`)
let fumador = prompt(`¿Alguna persona fuma?`)
let pais = prompt(`Ingrese pais de origen`)

function proceso() {

    switch (habitacion) {
        case 1:
            alert("Se le enviará a una llamada telefónica");
            atencionesTelefonicas.push(1);
            break;
        case 2:
            let tipoAsesoria = Number(prompt(`Elija tipo de asesoría:
                1. Asesoría estudiante.
                2. Asesoría Directivo.`));
            switch (tipoAsesoria) {
                case 1:
                    atencionesEstudiantes.push(1);
                    let transferir = confirm("¿Desea transferir la asesoría a una llamada telefónica?");
                    if (transferir) {
                        atencionesTransferidas.push(1);
                        atencionesEstudiantes.shift();
                    }
                    break;

                case 2:
                    atencionesDirectivos.push(1);
                    let transferir2 = confirm("¿Desea transferir la asesoría a una llamada telefónica?");
                    if (transferir2) {
                        atencionesTransferidas.push(1);
                        atencionesDirectivos.shift();
                    }
                    break;

                default:
                    alert("Opción no válida. Intente de nuevo.");
                    return;
            }
            break;

        default:
            alert("Opción no válida. Intente de nuevo.");
            return;
    }

    mostrarEstadisticas();
}