import React from 'react'
import GaleriaProductos from '../components/GaleriaProductos'
import '../App.css'

function Productos() {
	const imagenBase = '/img/2aN_BASE.jpg'
	const rosyMucha = '/img/2-rosy-mucha.jpg'
	const protectorSolar = '/img/protectorSolas.jpeg'
	const sakura = '/img/sakura.jpeg'
	const tocobo = '/img/TOCOBO04.jpg'
	const lipTatto = '/img/liptatto.jpg'

    // LISTA DE ITEMS DEL MENU (incluye imagenes por si se usan en la galería)
  const itemsMenu = [
    { href: '#base-2an', label: 'Base de maquillaje 2aN', image: imagenBase },
    { href: '#rosy-mucha', label: 'Rosy Mucha', image: rosyMucha },
    { href: '#protector-solar', label: 'Protector solar', image: protectorSolar },
    { href: '#sakura', label: 'Sakura', image: sakura },
    { href: '#tocobo', label: 'TOCOBO', image: tocobo },
    { href: '#lip-tattoo', label: 'Lip tattoo', image: lipTatto }
  ]

	const productos = [
		{ id: 1, nombre: 'Base de maquillaje 2aN', precio: 15990, descripcion: 'Base de maquillaje de alta calidad', imagen: imagenBase },
		{ id: 2, nombre: 'Rosy Mucha', precio: 12490, descripcion: 'Paleta de sombras rosadas', imagen: rosyMucha },
		{ id: 3, nombre: 'Protector solar', precio: 18990, descripcion: 'Protector solar con factor de protección SPF50', imagen: protectorSolar },
		{ id: 4, nombre: 'TOCOBO', precio: 21000, descripcion: 'Lápiz labial de alta durabilidad', imagen: tocobo },
		{ id: 5, nombre: 'Lip tattoo', precio: 9990, descripcion: 'Tatuaje de labios permanente', imagen: lipTatto }
	];

	return (
		<div className="pagina-productos">
			<GaleriaProductos productos={productos} />
		</div>
	)
}

export default Productos

