const cliente = new Map();

cliente.set(1094878251, {
    nombre: "Shaira Causil",
    cuentas: [
        { idCuenta: 1, saldo: 3000000, pin: 2612 },
        { idCuenta: 2, saldo: 1000000, pin: 2511 }
    ]
});

cliente.set(1074811087, {
    nombre: "Angela Peña",
    cuentas: [
        { idCuenta: 1, saldo: 400000, pin: 8087 },
        { idCuenta: 2, saldo: 200000, pin: 8780 }
    ]
});

alert("Hola, bienvenido/a al banco MaxAhorro");

let documento = Number(prompt("Ingrese número de documento de identidad:"));
if (cliente.has(documento)) {
    let datosCliente = cliente.get(documento);

    let cuentaId = Number(prompt("Ingrese número de cuenta:"));
    let pin = Number(prompt("Ingrese su PIN:"));

    const cuenta = datosCliente.cuentas.find(c => c.idCuenta === cuentaId);
    if (!cuenta) {
        alert("Número de cuenta no válido.");
    } else if (pin === cuenta.pin) {
        while (true) {
            let menu = Number(prompt(`Bienvenido/a ${datosCliente.nombre} al menú. Seleccione una opción:
                1. Consultar saldo.
                2. Retiro de efectivo.
                3. Depósito en efectivo.
                4. Depósito en cheque.
                5. Transferencia de dinero.
                6. Salir.`));

            switch (menu) {
                case 1:
                    alert(`Su saldo es de ${cuenta.saldo} Pesos Colombianos.`);
                    break;

                case 2:
                    function realizarRetiro(cuenta) {
                        let retiro = Number(prompt("Ingrese el monto a retirar (en múltiplos de 50,000 Pesos Colombianos):"));
                        
                        if (retiro % 50000 === 0) {
                            if (retiro <= cuenta.saldo) {
                                cuenta.saldo -= retiro;
                                alert(`Ha retirado ${retiro} Pesos Colombianos. Su nuevo saldo es ${cuenta.saldo} Pesos Colombianos.`);
                            } else {
                                alert("Saldo insuficiente para realizar este retiro.");
                            }
                        } else {
                            alert("El monto debe ser en múltiplos de 50,000 Pesos Colombianos.");
                        }
                    }
                    realizarRetiro(cuenta);
                    break;

                case 3:
                    let depositoEfectivo = Number(prompt("Ingrese el monto a depositar:"));
                    if (confirm(`¿Desea depositar ${depositoEfectivo} Pesos Colombianos?`)) {
                        cuenta.saldo += depositoEfectivo;
                        alert(`Ha depositado ${depositoEfectivo} Pesos Colombianos. Su nuevo saldo es ${cuenta.saldo} Pesos Colombianos.`);
                    }
                    break;

                case 4:
                    let depositoCheque = Number(prompt("Ingrese el monto a depositar:"));
                    if (confirm(`¿Desea depositar ${depositoCheque} Pesos Colombianos?`)) {
                        cuenta.saldo += depositoCheque;
                        alert(`Ha depositado ${depositoCheque} Pesos Colombianos. Su nuevo saldo es ${cuenta.saldo} Pesos Colombianos.`);
                    }
                    break;

                case 5:
                    function transferirDinero(cuentaOrigen, cuentaDestino, monto) {
                        if (monto <= cuentaOrigen.saldo) {
                            cuentaOrigen.saldo -= monto;
                            cuentaDestino.saldo += monto;
                            alert(`Transferencia exitosa. Su nuevo saldo es ${cuentaOrigen.saldo} Pesos Colombianos.`);
                        } else {
                            alert("Saldo insuficiente para realizar la transferencia.");
                        }
                    }

                    let cuentaDestinoId = Number(prompt("Ingrese el número de cuenta destino:"));
                    let montoTransferencia = Number(prompt("Ingrese el monto a transferir:"));
                    let cuentaDestino = datosCliente.cuentas.find(c => c.idCuenta === cuentaDestinoId);

                    if (cuentaDestino) {
                        transferirDinero(cuenta, cuentaDestino, montoTransferencia);
                    } else {
                        alert("Número de cuenta destino no válido.");
                    }
                    break;

                case 6:
                    alert("Saliendo del menú... Gracias por usar el banco MaxAhorro. ¡Hasta luego!");
                    break;

                default:
                    alert("Opción no válida. Por favor, elija una opción entre 1 y 6.");
                    break;
            }

            if (menu === 6) {
                break;
            }
        }
    } else {
        alert("PIN incorrecto. Inténtelo de nuevo.");
    }
} else {
    alert("Número de documento no encontrado. Por favor, intente de nuevo.");
}