
function GaleriaProductos({productos}) {
  return (
    <div className="galeria">
					{productos.map(producto => (
            <TarjetaProducto 
              key={producto.id}
              producto={producto}
            />
          ))}
		</div>
  );
}
export default GaleriaProductos;