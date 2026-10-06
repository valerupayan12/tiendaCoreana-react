import { Link } from 'react-router-dom'

function Header({ titulo, subtitulo, descripcion, itemsMenu = [] }) {
	return (
		<>
			<header id="encabezado">
				<h1>{titulo ?? 'K-Skin'}</h1>
				<p>{subtitulo ?? descripcion ?? 'Lo mejor de la estetica Coreana en tu piel'}</p>
				<img src="img/logoskininternational.png" width="800" height="400" alt="logo" />

				<nav id="menu-principal"> {/* nav navegacion */}
					<ul>
						<li><a href="#inicio">Inicio</a></li>
						<li><a href="#album">Álbum</a></li>
						<li><a href="/#contacto">Contacto</a></li>
						<li><Link to="/productos">Productos</Link></li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header