import TarjetaProducto from './TarjetaProducto'; 

function GaleriaProductos({productos}) {
  return (
    <div className="galeria">
        {productos.map(producto => (
            <TarjetaProducto 
                key={producto.id} 
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
