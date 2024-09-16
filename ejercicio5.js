const productos = new Map(); 

productos.set(1, { nombre: "bateria", precio: 3000000, stock: 35 });
productos.set(2, { nombre: "guitarra", precio: 550000, stock: 25 });
productos.set(3, { nombre: "teclado", precio: 1500000, stock: 15 });
productos.set(4, { nombre: "campana", precio: 180000, stock: 10});

const carrito = [];

function agregarAlCarrito() {
    let continuar = true;

    
    while (continuar) {
      
        let productoSeleccionado = prompt(`¿Qué producto desea agregar en el carrito? 
            1. Bateria 
            2. Guitarra 
            3: Teclado`);

       
        productoSeleccionado = parseInt(productoSeleccionado);

       
        let producto = productos.get(productoSeleccionado);

        if (producto) {
            let cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto.nombre} desea agregar?`));

            if (cantidad <= producto.stock) {
                carrito.push({ nombre: producto.nombre, cantidad: cantidad, precio: producto.precio });
                producto.stock -= cantidad; 
            } else {
                alert("No hay suficiente stock disponible.");
            }
        } else {
            alert("Producto no disponible.");
        }

        continuar = prompt("¿Desea agregar otro producto? (1 si, 2 no)") === '1';
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "Carrito de Compras:\n";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        let subtotal = item.precio * item.cantidad;
        mensaje += `${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: ${subtotal.toFixed(2)}\n`;
        total += subtotal;
    }

    var totalRedondeado = Math.round(total * 100) / 100;
    mensaje += "Total de la compra: " + totalRedondeado;
    alert(mensaje);
}

function main() {
    agregarAlCarrito();
    mostrarCarrito();
}

main();
