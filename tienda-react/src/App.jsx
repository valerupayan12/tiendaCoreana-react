import GaleriaProductos from './components/GaleriaProductos'; // O la ruta correcta donde guardaste ese componente

import './App.css'
const imagenBase = '/img/2aN_BASE.jpg'
const rosyMucha = '/img/2-rosy-mucha.jpg'
const protectorSolar = '/img/protectorSolas.jpeg'
const sakura = '/img/sakura.jpeg'
const tocobo = '/img/TOCOBO04.jpg'
const lipTatto = '/img/liptatto.jpg'
import Seccion from './Seccion'
import Footer from './components/Footer';
import Header from './components/Header';


  function App() {
  //debe editarse 
  
  const itemsMenu = [
    {href:'#base-2an', label:'Base de maquillaje 2aN', image: imagenBase},
    {href:'#rosy-mucha', label:'Rosy Mucha', image: rosyMucha},
    {href:'#protector-solar', label:'Protector solar', image: protectorSolar},
    {href:'#sakura', label:'Sakura', image: sakura},
    {href:'#tocobo', label:'TOCOBO', image: tocobo},
    {href:'#lip-tattoo', label:'Lip tattoo', image: lipTatto}
  ]

  // 👇 AÑADE ESTA NUEVA LISTA AQUÍ ABAJO 👇
  const productos = [
    { id: 1, nombre: 'Base de maquillaje 2aN', precio: 15990, imagen: imagenBase },
    { id: 2, nombre: 'Rosy Mucha', precio: 12490, imagen: rosyMucha },
    { id: 3, nombre: 'Protector solar', precio: 18990, imagen: protectorSolar },
    { id: 4, nombre: 'Sakura', precio: 14500, imagen: sakura },
    { id: 5, nombre: 'TOCOBO', precio: 21000, imagen: tocobo },
    { id: 6, nombre: 'Lip tattoo', precio: 9990, imagen: lipTatto }
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
				<GaleriaProductos productos={productos}/>
			</Seccion>

      </main> 

      <Footer 
      foot="&copy; 2025 Álbum de Ejemplo - Todos los derechos reservados" />
    </>
  )
}

export default App
