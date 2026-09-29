
function TarjetaProducto({nombre,imagen,precio}){
    return(
        <article className="tarjeta">
						<div className="espacio-imagen">
							<img src={imagen} />
						</div>
						<h3>{nombre}</h3>
                        <p className="precio">${precio}</p>
					
		</article>
    );
}
export default TarjetaProducto

/*id: 1,
nombre: 'Base de maquillaje 2aN',
imagen: imagenBase,*/ 