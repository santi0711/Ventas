const carrito = [];
const btnsAgregar = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');
const verCarritoBtn = document.getElementById('verCarrito');
const carritoAside = document.getElementById('carrito');
const vaciarBtn = document.getElementById('vaciar');

// Mostrar/Ocultar carrito
verCarritoBtn.addEventListener('click', () => {
  carritoAside.classList.toggle('oculto');
});

// Agregar productos
btnsAgregar.forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.getAttribute('data-nombre');
    const precio = parseFloat(btn.getAttribute('data-precio'));

    carrito.push({ nombre, precio });
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  listaCarrito.innerHTML = '';

  let totalPrecio = 0;
  carrito.forEach((item, index) => {
    totalPrecio += item.precio;
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });

  total.textContent = `Total: $${totalPrecio}`;
}

// Vaciar carrito
vaciarBtn.addEventListener('click', () => {
  carrito.length = 0;
  actualizarCarrito();
});
