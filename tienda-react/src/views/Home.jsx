
import React from 'react'
import GaleriaProductos from '../components/GaleriaProductos'
import '../App.css' // estilos
import Seccion from '../Seccion'
import Footer from '../components/Footer'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacto from '../components/Contacto'


function Home() {
  
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

  // LISTA DE PRODUCTOS
  const productos = [
    { id: 1, nombre: 'Base de maquillaje 2aN', precio: 15990, descripcion: 'Base de maquillaje de alta calidad', imagen: imagenBase },
    { id: 2, nombre: 'Rosy Mucha', precio: 12490, descripcion: 'Paleta de sombras rosadas', imagen: rosyMucha },
    { id: 3, nombre: 'Protector solar', precio: 18990, descripcion: 'Protector solar con factor de protección SPF50', imagen: protectorSolar },
    { id: 4, nombre: 'TOCOBO', precio: 21000, descripcion: 'Lápiz labial de alta durabilidad', imagen: tocobo },
    { id: 5, nombre: 'Lip tattoo', precio: 9990, descripcion: 'Tatuaje de labios permanente', imagen: lipTatto }
  ];

  return (
    <>
      <Header 
        titulo="K-Skin" 
        descripcion="Lo mejor de la estetica Coreana en tu piel" 
        itemsMenu={itemsMenu} />

      <main id="contenido">
        <Seccion id="inicio" titulo="Bienvenidos a K-Skin">
          <p>Los mejores productos de corea estan aqui.</p>
          <p>Puedes encontrar todo lo que necesites!.</p>
        </Seccion>

        <Seccion id="album" titulo="Nuestros Productos Estrella">
          <GaleriaProductos productos={productos} />
        </Seccion>

        <Seccion id="contacto" titulo="Contacto">
          <Contacto />
        </Seccion>
      </main>

      <Footer foot="&copy; 2025 Álbum de Ejemplo - Todos los derechos reservados" />
    </>
  )
}

export default Home