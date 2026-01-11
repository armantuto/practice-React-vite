import { useState } from "react";

const productos = [
  { nombre: "Juan", precio: 2500 },
  { nombre: "Carlos", precio: 3000 },

];

function Producto() {
  const [visible, setVisible] = useState(false);
  const [precioMinimo, setPrecioMinimo] = useState(2500);

  const productosFiltrados = productos.filter(
    producto => producto.precio > precioMinimo
  );

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
        productosFiltrados.map((producto) => (
          <div key={producto.nombre}>
            <h1>{producto.nombre}</h1>
            <h2>${producto.precio.toLocaleString()}</h2>
          </div>
        ))}
    </>
  );
}

export default Producto;
