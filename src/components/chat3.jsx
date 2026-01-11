import { useState } from "react";

function Producto1() {
  const [visible, setVisible] = useState(false);
  const [precioMinimo, setPrecioMinimo] = useState(2500);
  const [productosState, setProductosState] = useState([
    { nombre: "Juan", precio: 2500 },
    { nombre: "Carlos", precio: 3000 },
  ]);
  const [carrito, setCarrito] = useState([]);
  
  function agregarAlCarrito(product) {
    setCarrito([...carrito, product]);
  }


   const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);



  const productosFiltrados = productosState.filter(
    producto => producto.precio > precioMinimo
  );

  
  function aumentarPrecio(nombre) {
    const nuevosProductos = productosState.map(p =>
      p.nombre === nombre ? { ...p, precio: p.precio + 500 } : p
    );
    setProductosState(nuevosProductos);
  }

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>

      <button
        onClick={() =>
          setPrecioMinimo(precioMinimo === 2500 ? 2000 : 2500)
        }
      >
        Filtro: mayor a ${precioMinimo}
      </button>

      {visible &&
        productosFiltrados.map(producto => (
          <div key={producto.nombre}>
            <h1>{producto.nombre}</h1>
            <h2>${producto.precio}</h2>
            <button onClick={() => aumentarPrecio(producto.nombre)}>
              Subir precio
            </button>
              <button onClick={() => agregarAlCarrito(producto)}>
             agrega
            </button>
          </div>
        ))}
        { total > 0  && <div>
            <h3>Carrito:</h3>
            {carrito.map((item,index) => (
                <p ket = {index}>
                    {item.nombre} - ${item.precio}
                </p>
           ) )}
             <h3>Total:${total}</h3>


        </div>}
    </>
  );
} 

export default Producto1
