
function TarjetaProducto({id,nombre,imagen,precio}){
    return(
        <article class="tarjeta">
						<div className="espacio-imagen">
							<img src="img/TOCOBO04.jpg" />
                             style="height: 100%; width: 200%; object-fit: cover;">
						</div>
						<h3>{nombre}</h3>
                        <p>{precio}</p>
						
						
		</article>
    );
}
export default TarjetaProducto

/*id: 1,
nombre: 'Base de maquillaje 2aN',
imagen: imagenBase,*/ 