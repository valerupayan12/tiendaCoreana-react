import TarjetaProducto from "./TarjetaProducto"
function Header({titulo,descripcion,itemsMenu}){


return(
<>
<header id="encabezado">
			<h1>{titulo}</h1>
			<p>{descripcion}</p>
			<img src={Imagen} width="800" height="400"/>

			<nav id="menu-principal"> {/* nav navegacion */}
				<ul> {/* en esta seccion se puede referenciar/vincular una pagina https:// */}
					<li><a href="#inicio">Inicio</a></li>
					<li><a href="#album">Álbum</a></li>
					<li><a href="contacto.html">Contacto</a></li>
					<li><a href="index2.html">Productos</a></li>
				</ul>{/* ul lista desordenada, ol lista numerica */}
			</nav>
		</header>




</>
)
}

export default Header