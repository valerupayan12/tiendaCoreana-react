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
						<li><a href="contacto.html">Contacto</a></li>
						<li><a href="index2.html">Productos</a></li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header