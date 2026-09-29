
function TarjetaProducto({nombre,imgen,precio}){
    return(
        <article class="tarjeta">
						<div className="espacio-imagen">
							<img src={imgen}/>
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