import GaleriaProductos from './components/GaleriaProductos'; // O la ruta correcta donde guardaste ese componente

import './App.css' //IMPORTAMOS EL ARCHIVO CSS PARA ESTILOS
const imagenBase = '/img/2aN_BASE.jpg' //IMAGEN DE LA BASE DE MAQUILLAJE 2AN
const rosyMucha = '/img/2-rosy-mucha.jpg' //IMAGEN DE LA BASE DE MAQUILLAJE 2AN
const protectorSolar = '/img/protectorSolas.jpeg' //IMAGEN DE LA BASE DE MAQUILLAJE 2AN
const sakura = '/img/sakura.jpeg'//IMAGEN DE LA BASE DE MAQUILLAJE 2AN
const tocobo = '/img/TOCOBO04.jpg' //IMAGEN DE LA BASE DE MAQUILLAJE 2AN
const lipTatto = '/img/liptatto.jpg' //IMAGEN DE LA BASE DE MAQUILLAJE 2AN
import Seccion from './Seccion' //IMPORTAMOS EL COMPONENTE SECCION PARA USARLO EN EL APP
import Footer from './components/Footer'; //IMPORTAMOS EL COMPONENTE FOOTER PARA USARLO EN EL APP
import Header from './components/Header'; //IMPORTAMOS EL COMPONENTE HEADER PARA USARLO EN EL APP
import Form from 'react-bootstrap/Form'; //IMPORTAMOS EL COMPONENTE FORM DE REACT-BOOTSTRAP PARA USARLO EN EL APP
import Button from 'react-bootstrap/Button'; //IMPORTAMOS EL COMPONENTE BUTTON DE REACT-BOOTSTRAP PARA USARLO EN EL APP
import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTAMOS EL CSS DE BOOTSTRAP PARA USARLO EN EL APP
import Contacto from './components/Contacto';

  function App() {
  //LISTA DE ITEMS DEL MENU
  const itemsMenu = [
    {href:'#base-2an', label:'Base de maquillaje 2aN', image: imagenBase},
    {href:'#rosy-mucha', label:'Rosy Mucha', image: rosyMucha},
    {href:'#protector-solar', label:'Protector solar', image: protectorSolar},
    {href:'#sakura', label:'Sakura', image: sakura},
    {href:'#tocobo', label:'TOCOBO', image: tocobo},
    {href:'#lip-tattoo', label:'Lip tattoo', image: lipTatto}
  ]

  // LISTA DE PRODUCTOS
  const productos = [
    { id: 1, nombre: 'Base de maquillaje 2aN', precio: 15990, imagen: imagenBase },
    { id: 2, nombre: 'Rosy Mucha', precio: 12490, imagen: rosyMucha },
    { id: 3, nombre: 'Protector solar', precio: 18990, imagen: protectorSolar },
    { id: 4, nombre: 'TOCOBO', precio: 21000, imagen: tocobo },
    { id: 5, nombre: 'Lip tattoo', precio: 9990, imagen: lipTatto }
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

      <Seccion id="contacto" titulo="Contacto">
      <Contacto />   
      </Seccion>

      </main> 
      <Footer 
      foot="&copy; 2025 Álbum de Ejemplo - Todos los derechos reservados" />
    </>
  )
}

export default App
