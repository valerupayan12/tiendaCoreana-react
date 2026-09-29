import TarjetaProducto from './TarjetaProducto'; // 👈 Asegúrate de que esta línea exista arriba de todo

function GaleriaProductos({productos}) {
  return (
    <div className="galeria">
        {productos.map(producto => (
            <TarjetaProducto 
                key={producto.id} // <-- Añade esta línea aquí
                id={producto.id}
                nombre={producto.nombre}
                imagen={producto.imagen}
                precio={producto.precio}
            />
        ))}
    </div>
  );
}
export default GaleriaProductos;
