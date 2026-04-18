let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    mostrarCarrito();
    document.getElementById('carrito').classList.add('activo');
}

function mostrarCarrito() {

    let lista= document.getElementById('lista-carrito');
    let totalElemento= document.getElementById('total');

    lista.innerHTML = '';

    carrito.forEach((producto, index) => {

        let li = document.createElement('li');

        li.innerHTML = `
        ${producto.nombre} - $${producto.precio.toLocaleString()}
        <button onclick="eliminarProducto(${index})">❌</button>`;

        lista.appendChild(li);
    });

    totalElemento.textContent = `Total: $${total.toLocaleString()}`;
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    mostrarCarrito();
}

function toggleCarrito() {
    let carrito = document.getElementById('carrito');
    carrito.classList.toggle('activo');
}