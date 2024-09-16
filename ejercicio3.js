function iniciarAtencion() {
    let atencionesTelefonicas = [];
    let atencionesEstudiantes = [];
    let atencionesDirectivos = [];
    let atencionesTransferidas = [];

    
    function solicitarAtencion() {
        let cedula = prompt("Ingrese su número de cédula:");
        let tipoAtencion = Number(prompt("Seleccione el tipo de atención: 1. Llamada Telefónica 2. Asesoría"));

        switch (tipoAtencion) {
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

   
    function mostrarEstadisticas() {
        let totalAtenciones = atencionesTelefonicas.length + atencionesEstudiantes.length + atencionesDirectivos.length + atencionesTransferidas.length;
        alert(`Estadísticas de atención:
            Total de usuarios atendidos: ${totalAtenciones}
            Llamadas telefónicas: ${atencionesTelefonicas.length}
            Asesorías a estudiantes: ${atencionesEstudiantes.length}
            Asesorías a directivos: ${atencionesDirectivos.length}
            Transferencias a llamadas telefónicas: ${atencionesTransferidas.length}`);
    }

   
    while (true) {
        solicitarAtencion();
        let continuar = confirm("¿Desea continuar atendiendo a más usuarios?");
        if (!continuar) {
            break;
        }
    }
}


iniciarAtencion();